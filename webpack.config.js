console.log('starting webpack...');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// exporting gives access to env and argv 

module.exports = (env) => {
  const isProduction = env =='production';
  // if isProduction the source map will not be included 
  // isProduction will output 2 files bundle.js and bundle.js.map
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js', 
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
      CSSExtract
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

