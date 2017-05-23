var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');
var express = require("express");
var filmRouter = new express.Router();

filmRouter.get("/", function(req, res) {
  res.json(films);
});

filmRouter.get("/:id", function(req, res) {
  var film = films[req.params.id];
  res.json({film: film});
});

filmRouter.post("/", function(req, res) {
  var film = req.body.film;
  films.push(film);
  res.json(films);
});

filmRouter.put("/:id", function(req, res) {
  var updatedFilm = req.body.film;
  films[req.paraps.id] = updatedFilm;
  res.json(films);
});

filmRouter.delete("/:id", function(req, res) {
  films.splice(req.params.id, 1);
  res.json(films);
});

module.exports = filmRouter;