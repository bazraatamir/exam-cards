const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/search', bookController.search);

module.exports = router;
