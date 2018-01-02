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

router.post("/add", (req, res) => {
  return db("resolution")
    .insert(req.body)
    .then(() => {
      res.redirect("/");
    });
});

router.get("/:id", (req, res) => {
  var id = req.params.id;
  return db("resolution")
    .select()
    .first()
    .where("id", id)
    .then(person => {
      res.render("edit", { person });
    });
});

router.put("/edit/:id", (req, res) => {
  var id = req.params.id;
  return db
    .select()
    .first()
    .from("resolution")
    .where("id", id)
    .update({
      name: req.body.name,
      content: req.body.content
    })
    .then(() => {
      res.redirect("/");
    });
});

router.delete("/delete/:id", (req, res) => {
  var id = req.params.id;
  return db("resolution")
    .select()
    .first()
    .where("id", id)
    .delete()
    .then(() => {
      res.redirect("/");
    });
});

module.exports = router;
