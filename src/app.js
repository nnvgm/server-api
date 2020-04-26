const express = require('express');
const UserAPIRouter = require('./routes/api/v1/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/users', UserAPIRouter);

module.exports = app;
