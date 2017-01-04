var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	var data = {
		title: 'Data Recovery - fixIT',
		name: 'Data Recovery',
		description: 'Device storage crash unexpectedly? ~ No Problem. We\'ll recover it for you!',
		bannerImage: 'images/data-recovery.jpg',
		serviceImage: 'images/service-data-recovery.jpg',
		serviceInfo: "We know how important your data is. However you really can\'t tell when will your storage will crash."
		+ " That\'s why at fixIT, we will recover all the data for you so that your memories of an event will never go to waste."
		+ " We can recover your data on any type of the device may it be on the CD, Hard Disk Drive, Flash Drive, or Memory Cards."
		+ ' How cool is that?',
		services: ['Remote Data Recovery', 'Onsite Data Recovery', 'Specialized Data Recovery'],
		servicePrice: '₱800 - 2000'
	};

	res.render('service-page', data);

});

module.exports = router;