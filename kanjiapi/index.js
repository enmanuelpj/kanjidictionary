const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes.js');
const cors = require('cors');
require('dotenv').config();

const app = express();
const dbString = process.env.DATABASE_CONN;

mongoose.connect(dbString);
const database = mongoose.connection;

app.use(cors());

database.on('error', (error) => {
    console.log(error);
})

database.once('connected', () => {
    console.log('Connected to Database');
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

port = 4000;

app.use('/api', routes)

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
})

