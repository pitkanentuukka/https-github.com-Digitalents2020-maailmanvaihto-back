const {MongoClient}= require('mongodb')

//const mongoClient = require('../mongo')
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await getQuestions();
    res.status(200).send(result).end();
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  } finally {

  }

})

const getQuestions = async() => {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const cursor = await client.db("maailmanvaihto").collection("questions").find();
    const result = await cursor.toArray()
  } catch (e) {
    console.log(e);
    throw e;
  } finally {
    await client.close();
  }
}




module.exports = router;
