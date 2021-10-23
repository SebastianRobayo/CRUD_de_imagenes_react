const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const diskstorage = multer.diskStorage({
	destination: path.join(__dirname, '../imagenes'),
	filename: (req, file, cb) => {
		cb(null, Date.now() + file.originalname);
	}
});

const fileUp = multer({
	storage: diskstorage
}).single('imagen');

router.get('/', (req, res) => {
	res.send('Bienvenido');
});

router.post('/imagenes/post', fileUp, (req, res) => {
	console.log(req.file);
});

module.exports = router;
