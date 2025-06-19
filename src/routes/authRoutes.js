const express = require('express');
const { loginUserOrClient } = require('../controllers/authController');

const router = express.Router();

router.post('/login', loginUserOrClient);

module.exports = router;