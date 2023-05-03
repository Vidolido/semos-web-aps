const mongoose = require('mongoose');
const config = require('../config');

const { MONGO_USERNAME, MONGO_PASSWORD } = config.get('development');

const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.qzjckop.mongodb.net/test`;
// const uri = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.qzjckop.mongodb.net/`;

async function connect() {
	try {
		await mongoose.connect(uri);
		console.log('Connected!');
	} catch (err) {
		console.error(err.message);
	}
}

connect();
