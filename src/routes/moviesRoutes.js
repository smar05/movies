const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");
const functions = require("../functions/functions.js");

const baseUrl = "/movies";

//Validaciones
const validateMoviesAddNoEmpty = functions.notEmpty([
  "title",
  "rating",
  "awards",
  "release_date",
  "length",
  "genre",
]);

router.get(baseUrl, moviesController.list);
router.get(`${baseUrl}/new`, moviesController.newesMovies);
router.get(`${baseUrl}/recommended`, moviesController.recomended);
router.get(`${baseUrl}/detail/:id`, moviesController.detail);
router.get(`${baseUrl}/add`, moviesController.add);
router.get(`${baseUrl}/edit/:id`, moviesController.edit);

router.post(
  `${baseUrl}/create`,
  validateMoviesAddNoEmpty,
  moviesController.create
);
router.post(
  `${baseUrl}/update/:id`,
  validateMoviesAddNoEmpty,
  moviesController.update
);
router.post(`${baseUrl}/delete/:id`, moviesController.deleteMovie);

module.exports = router;
