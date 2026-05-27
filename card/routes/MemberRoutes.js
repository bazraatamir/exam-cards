const express = require('express');
const memberController = require('../controller/memberController');

const router = express.Router();

router.put('/:id', memberController.update);

module.exports = router;
