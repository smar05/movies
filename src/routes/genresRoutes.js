const express = require("express");
const router = express.Router();
const genresController = require("../controllers/genresController.js");

const baseUrl = "/genres";
const apiBaseUrl = `/api${baseUrl}`;

router.get(baseUrl, genresController.list);
router.get(`${baseUrl}/detail/:id`, genresController.detail);

//Api routes
router.get(apiBaseUrl, moviesController.apiList);
router.get(`${apiBaseUrl}/detail/:id`, moviesController.apiDetail);

module.exports = router;
