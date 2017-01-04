var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	var data = {
		title: 'Accessories/Peripherals- fixIT',
		name: 'Accessories/Peripherals',
		description: 'Gaming Peripherals for your computer?~ We have IT!',
		bannerImage: 'images/accessories-peripherals.jpg',
		serviceImage: 'images/service-accessories-peripherals.png',
		serviceInfo: "FixIT offers the latest electronic products and support to our customer ."
		+ " With just one click! you can avail our latest product and services."
		+ " FixIT will help you find the perfect accessory or service for you.",
		services: ['Computer Accessories', 'PC Components', 'PC Gaming', 'Electronics Appliances',
		'Computers', 'Laptops', 'Desktops', 'Monitors'],
		servicePrice: '₱500 - 1000'
	};

	res.render('service-page', data);

});

module.exports = router;