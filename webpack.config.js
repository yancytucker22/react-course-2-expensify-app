console.log('starting webpack...');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// reads all env variables and sets in envorinment
if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({path: '.env.test'});
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({path: '.env.development'});
}

// exporting gives access to env and argv 

module.exports = (env) => {
  const isProduction = env =='production';
  // if isProduction the source map will not be included 
  // isProduction will output 2 files bundle.js and bundle.js.map
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: ['babel-polyfill', './src/app.js'], 
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'  
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              } 
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
        'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID)
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/dist'
    } 
};

//console.log(path.join(__dirname, 'public'));

};

