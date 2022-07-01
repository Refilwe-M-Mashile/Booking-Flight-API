const express = require("express");

const router = express.Router();
const controller = require("../controllers/flightController");

router.get("/", controller.example);
router.post("/flight", controller.addFlight);
router.get("/flights", controller.allFlights);
router.get("/flight/:id", controller.getFlight);
router.put("/flight/:id", controller.editFlight);
router.delete("/flight/:id", controller.deleteFlight);

module.exports = router;
