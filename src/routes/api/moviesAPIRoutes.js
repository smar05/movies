const express = require("express");
const router = express.Router();
const moviesAPIController = require("../../controllers/api/moviesAPIController.js");

const apiBaseUrl = `/api/movies`;

router.get(apiBaseUrl, moviesAPIController.apiList);
router.get(`${apiBaseUrl}/detail/:id`, moviesAPIController.apiDetail);

module.exports = router;
