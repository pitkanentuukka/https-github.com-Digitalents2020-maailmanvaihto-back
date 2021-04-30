
exports.getQuestions = async() => {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const result = await client.db("maailmanvaihto").collection("questions").find();
    return result
  } catch (e) {
    throw e;
  } finally {
    await client.close();
  }
}

exports.saveAnswers = async(post) => {

  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const cursor = await client.db("maailmanvaihto").collection("answers").insertOne(post);
    const result = await cursor.toArray();
    return result;

  } catch (e) {
    console.log(e);
    throw e;
  } finally {
    await client.close();

  }
}


exports.addQuestions = async(post) => {

  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const cursor = await client.db("maailmanvaihto").collection("questions").insertMany(post);
    const result = await cursor.toArray()
    return result

  } catch (e) {
    console.log(e);
    throw e;
  } finally {
    await client.close();

  }
}
exports.getAnswers = async () => {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const cursor = await client.db("maailmanvaihto").collection("answers").find();
    const result = await cursor.toArray()
    return result
  } catch (e) {
    console.log(e);
    throw e;
  } finally {
    await client.close();
  }
}
