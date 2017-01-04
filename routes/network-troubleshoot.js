var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	var data = {
		title: 'Network Troubleshoot - fixIT',
		name: 'Network Troubleshoot',
		description: 'Can\'t connect to the internet?~ Let fixIt do the work!',
		bannerImage: 'images/network-troubleshoot.jpg',
		serviceImage: 'images/sevice-network-troubleshoot.jpg',
		serviceInfo: "FixIT offers a networking servies for home and business. Whether a simple network for your home to share printers or a secure setup for your business."
		+ " We make sure no one can acces your data or use your shared Internet services without your knowledge or consent."
		+ " It is our job to offer you our assistance.",
		services: ['Network security Testing', 'Network Cabling', 'Routing Configuration', 'Intrusion Detection System(IDS)',
		'Firewalls', 'Virtual private Networking (VPN)', 'Wall Jacks/Paneling'],
		servicePrice: '₱500 - 5000'
	};

	res.render('service-page', data);

});

module.exports = router;