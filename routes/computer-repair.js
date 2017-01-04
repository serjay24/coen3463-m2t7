var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	var data = {
		title: 'Computer Repair',
		name: 'Computer Repair',
		description: 'Does your Computer not working properly? ~ fixIT to us!',
		bannerImage: 'images/computer-repair.jpg',
		serviceImage: 'images/service-computer-repair.jpg',
		serviceInfo: "We know the feeling of having a computer that doesn\'nt work properly. This problem may cause us to slow our work."
		+ " That\'s why at fixIT, we will repair all the problems particularly on your computer may it be hardware or software problem."
		+ " It is our commitment to help you.",
		services: ['Reformat', 'Hardware Replacement', 'Operating System Installation and Upgrade', 'Application Installation',
		'Virus Removal'],
		servicePrice: '₱500-1000.'
	};

	res.render('service-page', data);

});

module.exports = router;