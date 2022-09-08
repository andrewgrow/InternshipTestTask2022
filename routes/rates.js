const express = require('express');
const ratesController = require('../controllers/rates');

const router = express.Router();
router.get('/rates', ratesController.getRate);

module.exports = router;