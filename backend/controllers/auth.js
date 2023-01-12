const bcrypt = require('bcryptjs');
const { response } = require('express');
const User = require('../models/User');

const createUser = async (req, res = response) => {
	const { email, password } = req.body;

	try {
		let usuario = await User.findOne({ email });

		if (usuario) {
			res.json({
				ok: false,
				msg: 'Ya existe un usuario registrado con este email',
			});
		}

		usuario = new User(req.body);

		// Encriptar contraseña

		const salt = bcrypt.genSaltSync();
		usuario.password = bcrypt.hashSync(password, salt);

		await usuario.save();

		res.status(201).json({
			ok: true,
			uid: usuario.id,
			email: usuario.email,
			username: usuario.username,
			fullname: usuario.fullname,
			password: usuario.password,
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	createUser,
};
