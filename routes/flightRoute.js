const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.example);
router.post('/flight', controller.addFlight);

module.exports = router;

