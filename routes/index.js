var express = require('express');
var router = express.Router();

var name = 'fixIT';

/* GET home page. */
router.get('/', function(req, res, next) {
  
  var indexData = {
  	title: name + ' - Your solution to IT Problems',
	name: name,
	description: 'Your solution to IT Problems',
	quote: "IT Problem? ~ LET'S fixIT!",
	goal: "Our team is committed to provide solutions to your IT problem. Your satisfaction is our main priority.",
	bannerImage: "images/service-home.jpg",
	services: [
        {
            "name":"Computer Repair",
            "description": "Does your Computer not working properly? ~ fixIT to us!",
            "bannerImage": "images/computer-repair.jpg",
            "link": '/computer-repair'
        },
        {
            "name":"Data Recovery",
            "description": "Device storage crash unexpectedly? ~ No Problem. We'll recover it for you!",
            "bannerImage": "images/data-recovery.jpg",
            "link": '/data-recovery'
        },
        {
            "name":"Software Solutions",
            "description": "Want to Boost your BUSINESS? ~ Our developers are waiting for you!",
            "bannerImage": "images/software-solutions.jpg",
            "link": '/software-solutions'
        },
        {
            "name":"Explore More Services",
            "description": "Did\'nt find what service you're looking for? ~ Explore deeper.",
            "price_range": "PHP 750 - PHP 1000",
            "bannerImage": "images/explore-more.jpg",
            "link": '/services'
        }]
};

  res.render('index', indexData);
});

module.exports = router;
