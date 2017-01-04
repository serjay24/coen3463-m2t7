var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	var data = {
		title: 'Cloud Service- fixIT',
		name: 'Cloud Service',
		description: 'Access your  files everywhere without compromising security!',
		bannerImage: 'images/cloud-service.jpg',
		serviceImage: 'images/service-cloud-service.jpg',
		serviceInfo: "FixIt offers an efficient, easy-to-use data encrytion and key management solution that secures customer's data in the cloud."
		+ " We also offer a secure storage volumes with identity validation and integrity rules."
		+ " FixIT will provide an easy access storage equipped with data and threat security in the clouds.",
		services: ['Hybrid Cloud Security', 'Messaging and Collaboration', 'InterScan Web Security', 'InterScan Messaging Security',
		'Deep Security for Severs & VDI', 'OfficeScan Endpint Security'],
		servicePrice: '₱500 - 1000'
	};

	res.render('service-page', data);

});

module.exports = router;