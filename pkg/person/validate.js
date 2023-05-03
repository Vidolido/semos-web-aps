const { Validator } = require('node-input-validator');

const Person = {
	firstName: 'required|string',
	lastName: 'required|string',
	age: 'required|integer',
	dateOfBirth: 'required|dateFormat:YYYY-MM-DD',
	address: 'required|string',
	vehicles: 'array',
	'vehicles.*': 'alphaNumeric',
};

const PersonPartial = {
	firstName: 'string',
	lastName: 'string',
	age: 'integer',
	dateOfBirth: 'dateFormat:YYYY-MM-DD',
	address: 'string',
	vehicles: 'array',
	'vehicles.*': 'alphaNumeric',
};

const validate = async (data, schema) => {
	let v = new Validator(data, schema);
	let e = await v.check();
	if (!e) {
		throw v.errors;
	}
};

module.exports = {
	Person,
	PersonPartial,
	validate,
};
