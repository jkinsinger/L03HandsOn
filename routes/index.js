var express = require('express');
var router = express.Router();
var storySection = require('../models/storyLine')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/beginning', function(req, res, next) {
  let story = storySection.storyLines.find(story => {
    return story.storyPart === 'beginning'
  })
  res.render('beginning', {story});

  console.log(req.url)
});

router.get('/middle', function(req, res, next) {
    let story = storySection.storyLines.find((story) => {
      return story.storyPart === 'middle'
    })
    res.render('middle', {story});
    console.log(req.url)
});


router.get('/end', function(req, res, next) {
      let story = storySection.storyLines.find((story) => {
        return story.storyPart === "end"
      })
      res.render('end', {story});
      console.log(req.url) 
});


module.exports = router;
