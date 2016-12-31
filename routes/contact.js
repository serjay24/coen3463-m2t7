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

    //Content of the Email
    var emailContent = {
        from: '"fixIT Team" <fixit.solution.v1@gmail.com>',
        to: 'fixit.solution.v1@gmail.com',
        subject: 'Testing Node Mailer',
        //text: 'This is a test.',
        html: '<div style="background-color: orange"><section style="background-color: black"><h2 style="font-family: Ubuntu, sans-serif; color: white; text-align: center">fixIT - Your Solution to IT Problems</h2><br><h2 style="font-family: Ubuntu, sans-serif; color: white; text-align: center; font-size: 70px">We\'ve got your inquiries!</h2><h3 style="font-family: Ubuntu, sans-serif; color: white; text-align: center">Thank you for contacting us!</h3><br><p style="font-family: Ubuntu, sans-serif; color: white; text-align: center">One of our support representative will get in touch with you. Always keep your email account active.</p><p style="font-family: Ubuntu, sans-serif; color: white; text-align: center">This is the summary of your inquiries:</p><br><ul style="font-family: Ubuntu, sans-serif; color: white; text-align: left"><li>Name: &nbsp;' + name + '</li><br><li>E-mail: &nbsp;' + email + '</li><br><li>Message: &nbsp;' + message + '</li></ul><br></section></div>'
        }
    };

    var customerCopy = {
        from: '"fixIT Team" <fixit.solution.v1@gmail.com>',
        to: email,
        subject: 'Testing Node Mailer - Copy',
        text: 'This is the customer copy of email.' 
    };

    //Sending Email

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            xoauth2: generator
        }
    });



    transporter.sendMail(emailContent, function(error, info) {
        if(error) {
            console.log("\nMessage not sent! Try again." + "\n");
        }
        else {
            console.log("\nMessage Sent!" + "\n");
        }
    });

    transporter.sendMail(customerCopy, function(error, info) {
        if(error) {
            console.log("\nMessage not sent! Try again. - customer Copy" + "\n");
            res.redirect('/contact')
        }
        else {
            name = "";
            email= "";
            message= "";
            console.log("\nMessage Sent - customer Copy!" + "\n");
            res.redirect('/contact');
        }
    });
});

router.get('/preview', function(req, res, next) {
  res.render('emailTemplate', {
    name: 'Serjay Ilaga',
    email: 'serjay_ilaga@yahoo.com',
    message: 'Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum, Lorem ipsum'
  });
});

module.exports = router;
