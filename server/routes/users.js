const express = require('express');
const cors = require('cors');
const router = express.Router();
const users = require('../controllers/UsersController');
const jwt = require('jsonwebtoken')

router.use(cors())

process.env.SECRET_KEY = 'secret'
/* GET users listing. */
router.get('/', users.getAll);
router.get('/:id', users.getUserById);
router.post('/register', users.createUser);
router.post('/login', users.login);


module.exports = router;
