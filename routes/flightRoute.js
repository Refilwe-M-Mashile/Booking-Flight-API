const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

router.get('/', controller.example);
router.post('/flight', controller.addFlight);
router.get('/flights', controller.allFlights);

module.exports = router;

