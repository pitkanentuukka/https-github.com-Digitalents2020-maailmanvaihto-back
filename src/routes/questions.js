const dotenv = require('dotenv')
const express = require('express');
const router = express.Router();
const cors = require('cors')

const mongo = require('../mongo.js')
//const bodyParser = require('body-parser')
//const { json } = require('body-parser')


//const mongoClient = require('../mongo')


router.get('/questions', cors(), async (req, res) => {
  try {
    const result = await mongo.getQuestions();
    res.status(200).send(result).end();
  } catch (e) {
    console.log(e);
    res.status(500).json(e).end();
  }
})

router.post('/answers', cors(), async (req, res) => {
  try {
    const result = await mongo.saveAnswers(req.body)
    res.status(200).json(result).end();
  } catch (e) {
    console.log(e);
    res.status(500).json(e).end();
  }
})

router.post('/addQuestions', cors(), async (req, res) => {
  try {
    const result = await mongo.addQuestions(req.post)
    res.status(200).json(result).end();
  } catch (e) {
    res.status(500).json(e).end();
  }
})


router.get('/answers', async (req, res) => {
  try {
    const result = await mongo.getAnswers()
    res.status(200).send(result).end();
  } catch (e) {
    console.log(e);
    res.status(500).json(e).end();
  }
})


module.exports = router;
