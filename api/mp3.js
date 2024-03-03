const mongo = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}`;
//console.log(`URI :: ${uri}`);
const mongoClient = new mongo.MongoClient(uri);

async function streamMp3(fname){
  let result = [];
  await mongoClient.connect()
    .then(connection=>connection.db(process.env.MONGODB_DB))
	.then(db=>{		
		const bucket = new mongo.GridFSBucket(db);
		result = bucket.openDownloadStreamByName( fname );
	})
	
    .catch(error => console.log(error))
	;
  return result;
}

async function playMp3 (req, res) {
	console.log('playMp3 called');
	try {
		res.setHeader('Content-Type', 'audio/mp3');
		res.setHeader('Accept-Ranges', 'bytes');
		const readstream = await streamMp3( req.body.audio );
		readstream.pipe(res);
	} catch (error) {
        res.status(500).json({ message: error.message })
    }
	
}

module.exports = playMp3;