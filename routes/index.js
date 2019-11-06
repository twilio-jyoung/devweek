var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "DeveloperWeek Austin 2019", connection_status: "connecting...", google_api_key: process.env.GOOGLE_MAPS_API_KEY });
});

module.exports = router;
