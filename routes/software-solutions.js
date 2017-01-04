var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	var data = {
		title: 'Software Solutions - fixIT',
		name: 'Software Solutions',
		description: 'Want to Boost your BUSINESS? ~ Our developers are waiting for you!',
		bannerImage: 'images/software-solutions.jpg',
		serviceImage: 'images/service-software-solutions.jpg',
		serviceInfo: "Technology today help us improve our daily lives especially if you have a business through the use of software."
		+ " However not all people have knowledge to implement technology to boost their business leaving them the option to do their transactions manually."
		+ " That\'s why our team in fixIT will help you to implement technology particularly in software to automate the process that is usally done manually."
		+ " With this, you will say goodbye to old, time-comsuming manual transaction and say hello to  automated transaction.",
		services: ['Web Development', 'Application Software', 'Database Management', 'Mobile App Development (Android / iOS)'],
		servicePrice: '₱1500 - 5000'
	};

	res.render('service-page', data);

});

module.exports = router;