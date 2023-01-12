const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const { dbConnection } = require('./db/config');

dbConnection();

app.use(cors());

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
	res.json({
		ok: true,
		msg: 'Server up',
	});
});

app.listen(process.env.PORT, () => {
	console.log('Server up');
});
