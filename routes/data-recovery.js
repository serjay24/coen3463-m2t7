var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

	var data = {
		title: 'Data Recovery',
		name: 'Data Recovery',
		description: 'Device storage crash unexpectedly? ~ No Problem. We\'ll recover it for you!',
		bannerImage: 'images/computer-repair.jpg',
		serviceImage: '#',
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