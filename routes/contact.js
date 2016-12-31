var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');

var nodemailer = require('nodemailer');

var generator = require('xoauth2').createXOAuth2Generator({
    user: 'fixit.solution.v1@gmail.com',
    clientId: '154708225527-uhd1qstr67uriog3botunst1qmn5754g.apps.googleusercontent.com',
    clientSecret: 'KfO2Kk_4Z5ZBOdULtIFNFJa1',
    refreshToken: '1/WPVIcTiFQNzCldbO0DscEAlF077VuIWi4M3Tvjwgwso',
    accessToken: 'ya29.Ci_FA3HsvKV603vf9mwHWEUYbZc2lRwlSmRGEZoKXZdIaT7F9mrnd4jIkBC5kWz_bA' // optional
});

var name = "";
var email = "";
var message = "";


generator.on('token', function(token){
    console.log('New token for %s: %s', token.user, token.accessToken);
});


/* GET Contact Us page. */
router.get('/', function(req, res, next) {
  
  var contactData = {
  	title: 'Contact Us - Support',
	name: 'Have Inquiries?',
	description: 'We\'d love to hear it. We\'re just one click away!',
    bannerImage: 'images/contact-banner.jpg',
	contactInfo: [
        {
            "address":"3/F PUP College of Engineering CEA Building, NDC Campus Anonas cor. Pureza St. Sta. Mesa, Manila 01008",
            "phone":"(02) 353-3998",
            "email":"fixit.solution.v1@gmail.com",
            "link": "/contact"
        }],
    nameValue: name,
    emailValue: email,
    messageValue: message
};

  res.render('contact', contactData);
});


router.post('/send-email', function (req, res, next) {
    name = req.body.name;
    email = req.body.email;
    message = req.body.message;

    //Sending Email

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            //user:'fixit.solution.v1@gmail.com',
            //pass: 'fixIT.$upp0rt'
            xoauth2: generator
        }
    });


    var emailContent = {
        from: '"fixIT Team" <fixit.solution.v1@gmail.com>',
        to: 'fixit.solution.v1@gmail.com',
        subject: 'Testing Node Mailer',
        text: 'This is a test.' 
    };

    transporter.sendMail(emailContent, function(error, info) {
        if(error) {
            console.log("\nMessage not sent! Try again." + "\n");
            res.redirect('/contact')
        }
        else {
            name = "";
            email= "";
            message= "";
            console.log("\nMessage Sent!" + "\n");
            res.redirect('/contact');
        }
    });

    //console.log("\nA customer would like to inquire:\n\n" + "Name: " + name + "\n"
     //   + "Email: " + email + "\n" + "Message: " + message + "\n");

    //res.redirect('/contact');
});

module.exports = router;
