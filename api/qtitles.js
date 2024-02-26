const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PW}@${process.env.MONGODB_URL}/${process.env.MONGODB_DB}`;

const mongoClient = new MongoClient(uri);

async function getTitles(){
  let result = [];
  await mongoClient.connect()
    .then(connection=>connection.db(process.env.MONGODB_DB))
	.then(db=>db.collection('quiz'))
	//.then(q=>q.find( {} ,  {projection: { title: 1} } ))
	.then(q=>q.aggregate(
				[
					{ $unwind : "$sentences" } ,
					{ $group : { _id : "$_id" , title: { $first : "$title" } , cnt : { $count : {} } } }
				]
			)
		)
    .then(cursor=>cursor.toArray())
    .then(listing=>{ result = listing.map(a=>{return {_id: a._id , title: a.title , cnt: a.cnt} } )})
    .catch(error => console.log(error))
	;
  return result;
}

async function fetchTitles (req, res) {
	
	try {
		const tit=await getTitles();
		res.status(200).json({titles: tit});
	} catch (error) {
        res.status(500).json({ message: error.message })
    }
	
}

module.exports = fetchTitles;