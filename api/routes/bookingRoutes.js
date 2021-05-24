const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

router.get("/userbookings", bookingController.getBookingsByUser);

module.exports = router;