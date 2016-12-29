var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');


var name = 'fixIT';

/* GET Contact Us page. */
router.get('/', function(req, res, next) {
  
  var contactData = {
  	title: name + ' - Your solution to IT Problems',
	name: name,
	description: 'Your solution to IT Problems.',
	contactInfo: [
        {
            "address":"3/F PUP College of Engineering CEA Building, NDC Campus Anonas cor. Pureza St. Sta. Mesa, Manila 01008",
            "phone":"353-3998",
            "email":"support@fixit.com",
            "link": "/contact"
        }]
};

  res.render('contact', contactData);
});

router.post('/', function (req, res, next) {
    var x = req.body.bannerTitle;
    res.redirect('/contact')

    console.log(x);
});

module.exports = router;
