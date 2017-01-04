var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  var servicesData = {
  	title: 'Services',
	name: 'Explore Services',
	description: 'Our experts are waiting for you',
	bannerImage: "images/explore-more.jpg",
	services: [
        {
            "name":"Computer Repair",
            "description": "Does your Computer not working properly? ~ fixIT to us!",
            "bannerImage": "images/computer-repair.jpg",
            "link": '/computer-repair'
        },
        {
            "name":"Data Recovery",
            "description": "Device storage crash unexpectedly? ~ No Problem. We\'ll recover it for you!",
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
            "name":"Mobile Troubleshoot",
            "description": "Never missed important calls and messages in your phone!",
            "bannerImage": "images/mobile-troubleshoot.png",
            "link": '/mobile-troubleshoot'
        },
        {
            "name":"Network Troubleshoot",
            "description": "Can\'t connect to the internet? ~ Let fixIT do the work!",
            "bannerImage": "images/network-troubleshoot.jpg",
            "link": '/network-troubleshoot'
        },
        {
            "name":"PC Tune-Up",
            "description": "Turtle-like computer speed? ~ Better check it to our experts!",
            "bannerImage": "images/pc-tuneup.png",
            "link": '/pc-tune-up'
        },
        {
            "name":"Cloud Service",
            "description": "Access your files everywhere without compromising security!",
            "bannerImage": "images/cloud-service.jpg",
            "link": '/#3'
        },
        {
            "name":"Accessories / Peripherals",
            "description": "Gaming Peripherals for your computer? ~ We Have IT!",
            "bannerImage": "images/accessories-peripherals.jpg",
            "link": '/accessories-peripherals'
        }]
};

  res.render('services', servicesData);
});

module.exports = router;
