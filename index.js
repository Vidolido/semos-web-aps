const express = require('express');

const config = require('./pkg/config');

require('./pkg/db');

const carRoutes = require('./routes/cars');
const personRoutes = require('./routes/person');

const api = express();

api.use(express.json());

// cars routes
api.use('/api/cars', carRoutes);

// person routes
api.use('/api/person', personRoutes);

api.listen(config.get('development').port, (err) => {
	err
		? console.log(err)
		: console.log(`Server started on port ${config.get('development').port}`);
});

//Homework
// 1. Create a Person Schema
//    - Validate person fields - node-input-validator or mongoose
// 2. Create CRUD functions
//    - plus functions for exercise -> take all people that are under 18 years old
// 3. Create handlers for these functions
// 4. Display them in index.js and run them with Insomnia or POSTMAN
