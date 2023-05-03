const mongoose = require('mongoose');
// const { Car } = require("../pkg/cars/validate");

const personSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true,
		minLenth: [2, 'Must be at least 2 characters'],
	},
	lastName: {
		type: String,
		required: true,
		minLenth: [2, 'Must be at least 2 characters'],
	},
	age: {
		type: Number,
		required: true,
		min: 0,
	},
	dateOfBirth: {
		type: Date,
		required: true,
	},
	address: {
		type: String,
		required: true,
		minLenth: [2, 'Must be at least 2 characters'],
	},
	vehicles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'cars' }],
	createdAt: {
		type: Date,
		immutable: true,
		default: () => Date.now(),
	},
	updatedAt: {
		type: Date,
		default: () => Date.now(),
	},
});

const Person = mongoose.model('person', personSchema);

const addPerson = async (person) => {
	try {
		const newPerson = new Person(person);
		return await newPerson.save();
	} catch (err) {
		throw err;
	}
};

//remove person
const removePerson = async (id) => {
	return await Person.deleteOne({ _id: id });
};

//update person
const updatePerson = async (id, person) => {
	return await Person.updateOne({ _id: id, person });
};

//get all people
const getAllPeople = async () => {
	return await Person.find({});
};

//get one person
const getSinglePerson = async (id) => {
	return await Person.findOne({ _id: id });
};

module.exports = {
	addPerson,
	removePerson,
	updatePerson,
	getAllPeople,
	getSinglePerson,
};
