var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');


var name = 'fixIT';

/* GET Contact Us page. */
router.get('/', function(req, res, next) {
  
  var contactData = {
  	title: 'Contact Us - Support',
	name: 'Hello World',
	description: 'Lorem Ipsum',
    bannerImage: 'images/contact-banner.jpg',
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
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;

    console.log("\nA customer would like to inquire:\n\n" + "Name: " + name + "\n"
        + "Email: " + email + "\n" + "Message: " + message + "\n");

    res.redirect('/contact')
});

module.exports = router;
