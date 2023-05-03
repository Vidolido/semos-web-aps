const {
	addPerson,
	removePerson,
	updatePerson,
	getAllPeople,
	getSinglePerson,
} = require('../pkg/person/mongo');

const { Person, PersonPartial, validate } = require('../pkg/person/validate');

const getAll = async (req, res) => {
	try {
		const people = await getAllPeople();
		return res.status(200).send(people);
	} catch (err) {
		console.log(err);
		return res.status(500).send('Internal Server Error');
	}
};

const getOne = async (req, res) => {
	try {
		const person = await getSinglePerson(req.params.id);
		return res.status(200).send(person);
	} catch (err) {
		console.log(err);
		return res.status(500).send('Internal Server Error');
	}
};

const create = async (req, res) => {
	try {
		await validate(req.body, Person);
		await addPerson(req.body);
		return res.status(201).send(req.body);
	} catch (err) {
		console.log(err);
		return res.status(500).send('Internal Server Error');
	}
};

const update = async (req, res) => {
	try {
		await validate(req.body, Person);
		await updatePerson(req.params.id, req.body);
		return res.status(204).send('');
	} catch (err) {
		console.log(err);
		return res.status(500).send('Internal Server Error');
	}
};

const updatePartial = async (req, res) => {
	try {
		await validate(req.body, PersonPartial);
		await updatePerson(req.params.id, req.body);
		return res.status(204).send('');
	} catch (err) {
		console.log(err);
		return res.status(500).send('Internal Server Error');
	}
};

const remove = async (req, res) => {
	try {
		await removePerson(req.params.id);
		return res.status(204).send('');
	} catch (err) {
		console.log(err);
		return res.status(500).send('Internal Server Error');
	}
};

module.exports = {
	getAll,
	getOne,
	create,
	update,
	updatePartial,
	remove,
};
