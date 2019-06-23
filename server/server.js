// create express server

const path = require('path');
const express = require('express');
const app = express();
// heroku provides process.env.PORT env variable
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '..', 'public');
app.use(express.static(publicPath));

// match all unmatched routes and send to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// second arg is callback function called when server started
app.listen(port, () => {
  console.log('server is up');  
});
