const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
	const {
		username,
		password,
		firstName,
		lastName,
		dateOfBirth,
		email,
		telephone,
		gender
	} = req.body;

	try {
		const newUser = await User.create({
			username,
			password,
			firstName,
			lastName,
			dateOfBirth,
			email,
			telephone,
			gender
		});

		res.status(200).send({ message: 'User created successfully!' });
	} catch (error) {
		res.status(500).send({ message: 'Bad request!', error });
	}
});

router.get('/list', async (req, res) => {
	const users = await User.find();

	res.status(200).send(users);
});

module.exports = router;