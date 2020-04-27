const express = require('express');
const cors = require('cors');

const UserAPIRouter = require('./routes/api/v1/users');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/v1/users', UserAPIRouter);

module.exports = app;
