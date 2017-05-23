var express = require("express");
var router = new express.Router();
var filmRouter = require("./films.js");

router.use("/api/films", filmRouter);

module.exports = router;