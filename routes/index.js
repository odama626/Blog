var express = require('express');
var router = express.Router();

var site = {
  name: 'logicBAMF'
}

var article = {
  title: 'My first post',
  banner: {
    image: 'https://c2.staticflickr.com/8/7520/15698350323_8dfdeb6fe5_b.jpg',
    text: '<p><strong>You voice</strong> Where you want it</p>'
  },
  headline: 'Intro',
  content: [
    {
      headline: 'part 1',
      details: 'This is the content part text',
      image: 'none'
    },
    {
      headline: 'part 1',
      details: 'This is the content part text',
      image: 'none'
    }
  ]
}

router.get('/', function( req, res) {
  res.render('index.pug', { user: req.user, site: site, article: article});
});


module.exports = router;
