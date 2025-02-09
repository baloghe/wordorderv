const ENCRYPTED_USER= process.env.APP_ENCRYPTED_USER;
const ENCRYPTED_PW	= process.env.APP_ENCRYPTED_PW;

async function auth(req, res){
	
	const {encUser, encPw} = req.body;
	
	const chk = (encUser===ENCRYPTED_USER && encPw===ENCRYPTED_PW);
	
	res.statusCode = 200;
	res.setHeader("Content-Type", "application/json");
	
    res.json(chk);
}

module.exports = auth;
