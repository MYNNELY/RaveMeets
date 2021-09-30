const express = require('express');
const {signup, login, maps} = require('../controllers/auth.js')

const router= express.Router();

router.post('/signup', signup);

router.post('/login', login);

router.get('/maps', maps);

module.exports = router;
