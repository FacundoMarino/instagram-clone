/*
    Auth:
    host + /api/auth

*/

const { Router } = require('express');
const { check } = require('express-validator');
const { createUser } = require('../controllers/auth');
const { fieldValidator } = require('../middlewares/field-validator');

const router = Router();

router.post(
	'/signup',

	[
		check('fullname', 'El campo fullname es obligatorio').not().isEmpty(),
		check('username', 'El campo username es obligatorio').not().isEmpty(),
		check('email', 'El campo email es obligatorio').isEmail(),
		check('password', 'El password debe contener 6 caracteres').isLength({
			min: 6,
		}),
		fieldValidator,
	],

	createUser
);

module.exports = router;
