const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const fs = require('fs');

const cors = require('cors');
const app = express();
const fileUpload = require('express-fileupload');
 
const userRouter = require('./routes/userRouter');
const closetRouter = require('./routes/closetRouter');
 
app.set('port', process.env.PORT);
app.use(express.json());
app.use(cors());
app.use(fileUpload());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
 
app.use('/api', userRouter);
app.use('/api', closetRouter);
 
module.exports = app;