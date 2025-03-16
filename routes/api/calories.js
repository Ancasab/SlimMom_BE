const express = require("express");
const caloriesController = require("../../controllers/caloriesController");
const productsController = require("../../controllers/productsController");
const { auth } = require("../../middlewares");

const router = express.Router();

router.post("/auth", auth, caloriesController.getDailyCalPrivate);
router.post("/", caloriesController.getDailyCalPublic);

router.post("/public", productsController.getDailyCalPublic);
router.post("/calorie", auth, productsController.getDailyCalPrivate);

module.exports = router;
