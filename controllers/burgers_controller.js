// Express
var express = require('express');

// Create the router for the app, and export the router at the end of your file.
var router = express.Router();

// requiring burger.js
var burger = require('../models/burger.js');



// router.get('/', function(req, res) {
// 	res.redirect('/');
// });

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burger_name"
    ], [
      req.body.burger_name
    ], function(result) {
      //res.json({ id: result.insertId });
      res.redirect('/')
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: true
    }, condition, function(result) {
     if (result.changedRows == 0) {
       return res.status(404).end();
      } else {
        res.redirect('/');
       res.status(200).end();
     }
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;