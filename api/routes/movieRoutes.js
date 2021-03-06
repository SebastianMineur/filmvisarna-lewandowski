const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");

router.get("/values", movieController.getValues);
router.get("/:movieId", movieController.getMovieById);
router.get("/", movieController.getAllMovies);

module.exports = router;
