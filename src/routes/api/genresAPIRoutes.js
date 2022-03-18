const express = require("express");
const router = express.Router();
const genresAPIController = require("../../controllers/api/genresAPIController.js");

const apiBaseUrl = `/api/genres`;

router.get(apiBaseUrl, genresAPIController.apiList);
router.get(`${apiBaseUrl}/detail/:id`, genresAPIController.apiDetail);

module.exports = router;
