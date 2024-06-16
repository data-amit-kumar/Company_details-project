var express = require('express');
var router = express.Router();

let offDetails = require("../models/c_model");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/create', async function(req, res) {
  try {
    const createddetails = await offDetails.create({
      name: req.body.name,
      cons: req.body.cons,
      pros: req.body.pros,
      rating: req.body.rating
    });
    res.redirect('/');
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/search', async function(req, res) {
  try {
    const foundDetails = await offDetails.findOne({ name: req.body.cname });
    res.render("search", foundDetails);
  } catch (error) {
    res.status(500).send(error);
  }
})

module.exports = router;
