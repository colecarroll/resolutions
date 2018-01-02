var express = require("express");
var router = express.Router();
var db = require("../db/connection.js");
/* GET home page. */
router.get("/", function(req, res, next) {
  return db
    .select()
    .from("resolution")
    .then(data => {
      res.render("index", { data });
    });
});

module.exports = router;
