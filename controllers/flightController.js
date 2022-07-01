const { flightsModel } = require("../models/Flight");

const example = (req, res) => {
  console.log("example");
  res.send("Flight example");
};

const addFlight = (req, res) => {
  const flight = req.body;
  flightsModel.push(flight);
  res.send("Added Flight");
};

const allFlights = (req, res) => {
  res.send(flightsModel);
};

const getFlight = (req, res) => {
  const id = +req.params.id;
  const flight =
    id in flightsModel ? flightsModel[id] : "Flight does not exist";
  res.send(flight);
};

const editFlight = (req, res) => {
  const id = +req.params.id;
  const flight = req.body;
  flightsModel[id] = flight;
  res.send("Flight Updated");
};

const deleteFlight = (req, res) => {};

module.exports = {
  example,
  addFlight,
  deleteFlight,
  allFlights,
  getFlight,
  editFlight,
};
