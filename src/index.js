const dotenv = require('dotenv')
dotenv.config()
const express = require('express');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express();
app.use(cookieParser())
app.use(bodyParser())

app.listen(process.env.SERVER_PORT, err =>
  {console.log(err ? `Serveri ei lähtenyt pyörimään` : `Serveri pyörii localhost:${process.env.SERVER_PORT}`)});

app.use('/api/questions', require('./routes/questions'))
