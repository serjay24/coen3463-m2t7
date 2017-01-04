var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	var data = {
		title: 'Mobile Troubleshoot - fixIT',
		name: 'Mobile Troubleshoot',
		description: 'Never missed important calls and messages in your phone!',
		bannerImage: 'images/mobile-troubleshoot.png',
		serviceImage: 'images/service-mobile-troubleshoot.jpg',
		serviceInfo: "Mobile Phones is the most used device to communicate. It can be used for personal or business purposes."
		+ " However, mobile phones are not exempted for errors and will cause problems when not fixed."
		+ " Our team in fixIT will help you fix the problem. They are equipped with skill to troubleshoot problems in your phone."
		+ " With your phone fuly functional, communication will go smoothly.",
		services: ['Re-flash the software', 'Hardware Repair', 'Install Application', 'Carrier Unlock', 'Software Upgrade'],
		servicePrice: '₱500 - 1000'
	};

	res.render('service-page', data);

});

module.exports = router;