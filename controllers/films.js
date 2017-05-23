var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');
var express = require("express");
var filmRouter = new express.Router();

filmRouter.get("/api/films", function(req, res) {
  res.json(films);
});

filmRouter.get("/api/films/:id", function(req, res) {
  var film = films[req.params.id];
  res.json({film: film});
});

filmRouter.post("/api/films", function(req, res) {
  var film = req.body.film;
  films.push(film);
  res.json(films);
});

filmRouter.put("/api/films/:id", function(req, res) {
  var updatedFilm = req.body.film;
  films[req.paraps.id] = updatedFilm;
  res.json(films);
});

filmRouter.delete("/api/films/:id", function(req, res) {
  films.splice(req.params.id, 1);
  res.json(films);
});

module.exports = filmRouter;