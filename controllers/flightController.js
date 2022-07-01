const { flightsModel } = require("../models/Flight");
const example = (req, res) => {
  console.log("example");
  res.send("Flight example");
};

const addFlight = (req, res) => {
  const { flight } = req.body;
  flightsModel.push(flight);
  res.send("Added Flight");
};

const allFlights = (req, res) => {
  res.send(flightsModel);
};

const deleteFlight = (req, res) => {};

module.exports = { example, addFlight, deleteFlight,allFlights };
