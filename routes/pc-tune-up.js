var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	var data = {
		title: 'PC Tune-Up- fixIT',
		name: 'PC Tune-Up',
		description: 'Turtle-like computer speed?~Better check it our experts!',
		bannerImage: 'images/pc-tuneup.png',
		serviceImage: 'images/service-pc-tuneup.png',
		serviceInfo: "Get your computer humming like new. We\'ll optimize your hard drive space."
		+ " Find unnecessary software and make sure your operating system is updated and much more."
		+ " It is our job to help you clean and optimize your PCs!",
		services: ['Update Windows', 'Anti-virus installation', 'Computer Defragment', 'Restore PC Factory Defaults',
		'Computer startup Optimization', 'Remove Unnecessary Software'],
		servicePrice: '₱200 - 800'
	};

	res.render('service-page', data);

});

module.exports = router;