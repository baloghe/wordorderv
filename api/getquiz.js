const { MongoClient , ObjectId } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}`;

const mongoClient = new MongoClient(uri);

async function getQuiz(id){
  let result = [];
  await mongoClient.connect()
    .then(connection=>connection.db(process.env.MONGODB_DB))
	.then(db=>db.collection('quiz'))
	.then(q=>q.findOne({_id: new ObjectId(id)} ))
    .then(listing=>{ result = listing})
    .catch(error => console.log(error))
	;
  return result;
}

async function fetchQuiz (req, res) {
	
	try {
		const qz=await getQuiz(req.body.id);
		res.status(200).json(qz);
	} catch (error) {
        res.status(500).json({ message: error.message })
    }
	
}

module.exports = fetchQuiz;