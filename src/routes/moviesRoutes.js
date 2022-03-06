const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");
const functions = require("../functions/functions.js");

//Validaciones
const validateMoviesAddNoEmpty = functions.notEmpty([
  "title",
  "rating",
  "awards",
  "release_date",
  "length",
]);

router.get("/movies", moviesController.list);
router.get("/movies/new", moviesController.newesMovies);
router.get("/movies/recommended", moviesController.recomended);
router.get("/movies/detail/:id", moviesController.detail);
router.get("/movies/add", moviesController.add);

router.post(
  "/movies/create",
  validateMoviesAddNoEmpty,
  moviesController.create
);

module.exports = router;
