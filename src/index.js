const dotenv = require('dotenv')
dotenv.config()
const express = require('express');

//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
//const cookieParser = require('cookie-parser')

const app = express();
//app.use(cookieParser())
app.use(express.json())
app.use(bodyParser())
//app.use(bodyParser.urlencoded({
//    extended: true
//}));
//app.use(bodyParser.json());


app.listen(process.env.SERVER_PORT, err =>
  {console.log(err ? `Serveri ei lähtenyt pyörimään` : `Serveri pyörii localhost:${process.env.SERVER_PORT}`)});

app.use('/api', require('./routes/questions'))
