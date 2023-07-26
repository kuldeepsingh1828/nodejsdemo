// create an express app and render index.html if url is / or /index.html
// if url is /login, render login.html

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes');
const adminRouter = require('./routes/admin');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/admin', adminRouter);
app.use('/', router);

app.listen(8080, function () {
    console.log('Server is running at port 8080');
});