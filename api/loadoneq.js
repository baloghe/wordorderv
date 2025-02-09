const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}`;

/*
const mockTests = [
{title: "2 Kere 2 Eder 12 - Zarafetinle...",
 langs: {L1: "TR" , L2: "EN"},
 sentences: [
{L1:"Zarafetinle güzelliğin yarış halinde.",L2:"Your elegance and beauty are in competition."},
{L1:"Bunu mahsus mu yapıyorsun ya?",L2:"Are you doing this on purpose?"},
{L1:"İri güzel gözlerinde binbir ışık yanıp sönüyordu.",L2:"A thousand lights were flashing in her big beautiful eyes."},
{L1:"Ne zamandan beri Kimsesiz Kızları Koruma Derneğine üye oldun?",L2:"Since when have you been a member of the Association for the Protection of Orphans?"},
{L1:"Ben, duygularımda hiç yanılmam.",L2:"I am never wrong in my feelings."}
]}
];
*/
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

async function addOne(what){
  let result = {};
	await mongoClient.connect()
    .then(connection=>connection.db(process.env.MONGODB_DB))
	.then(db=>db.collection('quiz'))
	.then(quiz=>quiz.insertMany(what))
    .then(listing=>{ result = listing})
    .catch(error => console.log(error))
	;
  return result;
}

async function findListing(criteria){
  let result = [];
  await mongoClient.connect()
    .then(connection=>connection.db(process.env.MONGODB_DB))
	.then(db=>db.collection('quiz'))
	.then(quiz=>quiz.findOne(criteria))
    .then(listing=>{ result = listing})
    .catch(error => console.log(error))
	;
  return result;
}

async function getTitles(){
  let result = [];
  await mongoClient.connect()
    .then(connection=>connection.db(process.env.MONGODB_DB))
	.then(db=>db.collection('quiz'))
	.then(q=>q.find({}, {projection: {title: 1} } ))
	.then(cursor=>cursor.toArray())
    .then(listing=>{ result = listing.map(a=>a.title)})
    .catch(error => console.log(error))
	;
  return result;
}

async function loadOneQuiz (req, res) {
	
	try {
		const inQuiz = req.body;
		//console.log(inQuiz);
		let tit0 = inQuiz.title;
		const del=await deleteOne(tit0);
		const add=await addOne([inQuiz]);
		//const fir=await findListing({});
		const tit=await getTitles();
		res.status(200).json({deleted: del.deletedCount , inserted: add.insertedCount , titles: tit.length});
		//res.status(200).json({body: req.body})
	} catch (error) {
        res.status(500).json({ message: error.message })
    }
	
}

module.exports = loadOneQuiz;