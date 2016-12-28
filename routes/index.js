var express = require('express');
var router = express.Router();

var name = 'fixIT';

/* GET home page. */
router.get('/', function(req, res, next) {
  
  var indexData = {
  	title: name + ' - Your solution to IT Problems',
	name: name,
	description: 'Your solution to IT Problems.',
	services: [
        {
            "name":"Hardware Repair",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a mollis est, sed dapibus neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
            "price_range":"PHP 1000 - PHP 2000",
            "link": '/hardware',
        },
        {
            "name":"Software Solutions",
            "description":"Adipiscing elit. Maecenas a mollis est, sed dapibus neque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
            "price_range":"PHP 750 - PHP 1000",
            "link": '/tuneup',
        }]
};

  res.render('index', indexData);
});

module.exports = router;
