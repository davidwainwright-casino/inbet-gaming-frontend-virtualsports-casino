const express = require('express');
const openBrowser = require('react-dev-utils/openBrowser');
const path = require('path');
const setupProxy = require('./../src/setupProxy');

const app = express();
const publicPath = path.resolve(__dirname, '../', 'build');

const staticServe = express.static(publicPath);

app.use('/', staticServe);

setupProxy(app);

app.use('*', staticServe);


app.listen(3002);
console.log('Open: http://localhost:3002/')
openBrowser('http://localhost:3002/');
