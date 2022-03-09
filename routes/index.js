var express = require('express');
var router = express.Router();
var storyLine = require('../models/storyLine')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/beginning', function(req, res, next) {
  let story = storyLine.storyLines.find(peep => {
    return peep.storyPart === parseInt(req.params.storyPart)
  })
  res.render('beginning', {story});
  console.log(req.url)


// router.get('/middle', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
// router.get('/end', function(req, res, next) {
//   res.render('index', { title: 'Express' });
});


module.exports = router;
