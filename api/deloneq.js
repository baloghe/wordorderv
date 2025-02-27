const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGODB_AUSER}:${process.env.MONGODB_APW}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}`;


const mongoClient = new MongoClient(uri);

async function deleteOne(inTitle){
  let result = {};
	await mongoClient.connect()
    .then(connection=>connection.db(process.env.MONGODB_DB))
	.then(db=>db.collection('quiz'))
	.then(quiz=>quiz.deleteOne({title: inTitle}))
    .then(listing=>{ result = listing})
    .catch(error => console.log(error))
	;
  return result;
}

async function delQuiz (req, res) {
	
	try {
		const inTitles = req.body;
		let cnt = 0;
		for(let tit of inTitles){
			const del=await deleteOne(tit);
			cnt += del.deletedCount;
		}
		res.status(200).json({deleted: cnt});
	} catch (error) {
        res.status(500).json({ message: error.message })
    }
	
}

module.exports = delQuiz;
