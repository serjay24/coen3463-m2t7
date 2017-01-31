var express = require('express');
var router = express.Router();

var jadeCompiler = require('../lib/jadeCompiler');
var mailer = require('../lib/mailService');

var nodemailer = require('nodemailer');

var generator = require('xoauth2').createXOAuth2Generator({
    user: 'fixit.solution.v1@gmail.com',
    clientId: '154708225527-uhd1qstr67uriog3botunst1qmn5754g.apps.googleusercontent.com',
    clientSecret: 'KfO2Kk_4Z5ZBOdULtIFNFJa1',
    refreshToken: '1/7PY1OiXyrvrl8OEQxOlQWYSmaAwTb4aSEH70SMf0ASY',
    accessToken: 'ya29.GlvkA2YvOh8OIRE_5Aotsoef0_4ABsqT5EDpprBpXQ6rZUqGthCD7evORWUJY9tS_o-sXMdFDfPoNShAXjE4s5wtQZF1zl5epI9PZSbiUEIB3rphcomsFk0uMuAb' // optional
});

generator.on('token', function(token){
    console.log('New token for %s: %s', token.user, token.accessToken);
});


var name = "";
var email = "";
var message = "";
var status = "";

//directory of the template
var template_dir = 'templates/emailTemplate';
var template_dir_team = 'templates/emailTemplate-fixIT'



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
    messageValue: message,
    statusValue: status
};

  res.render('contact', contactData);
  status = "";
  name= "";
  email= "";
  message= "";
});

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        xoauth2: generator
    }
});

router.post('/send-email', function (req, res, next) {
    name = req.body.name;
    email = req.body.email;
    message = req.body.message;
    status = req.body.status;
    var emailContent, customerCopy;

    var data = {
        name: name,
        email: email,
        message: message
    };

   jadeCompiler.compile(template_dir_team, data, function(err, emailTemplateforTeam){
        if(err){
            throw new Error('Problem compiling template(double check relative path): ' + template_dir_team);
        }

        emailContent = {
            from: 'fixit.solution.v1@gmail.com',
            to: 'fixit.solution.v1@gmail.com',
            subject: 'New Inquiry',
            //text: 'This is a test.',
            //html: '<body style="background-color: orange; padding: 2%"><div style="background-color: black"><h2 style="font-family: Ubuntu, sans-serif; color: white; text-align: center">fixIT - Your Solution to IT Problems</h2><br><h2 style="font-family: Ubuntu, sans-serif; color: white; text-align: center; font-size: 70px">We\'ve got your inquiries!</h2><h3 style="font-family: Ubuntu, sans-serif; color: white; text-align: center">Thank you for contacting us!</h3><br><p style="font-family: Ubuntu, sans-serif; color: white; text-align: center">One of our support representative will get in touch with you. Always keep your email account active.</p><p style="font-family: Ubuntu, sans-serif; color: white; text-align: center">This is the summary of your inquiries:</p><br><ul style="font-family: Ubuntu, sans-serif; color: white; text-align: left"><li>Name: &nbsp;' + name + '</li><br><li>E-mail: &nbsp;' + email + '</li><br><li>Message: &nbsp;' + message + '</li></ul><br></section></body>'
            html: emailTemplateforTeam
        };
    });

   jadeCompiler.compile(template_dir, data, function(err, emailTemplateforCustomer){
        if(err){
            throw new Error('Problem compiling template(double check relative path): ' + template_dir);
        }

        customerCopy = {
            from: '"fixIT Team" <fixit.solution.v1@gmail.com>',
            to: email,
            subject: 'Summary of Inquiry',
            html: emailTemplateforCustomer
        };
    });

    //Sending Email

    transporter.sendMail(customerCopy, function(error, info) {
        if(error) {
            status= 'Message Not Sent. Please Try Again!';
            console.log("\nMessage not sent! Try again. - customer Copy\n");
            res.redirect('/contact#contactForm')
        }
        else {
            console.log("\nMessage Sent! - customer Copy\n");

             transporter.sendMail(emailContent, function(error, info) {
                if(error) {
                    console.log("\nMessage not sent! Try again.\n");
                    res.redirect('/contact')
                }
                else {
                    name = "";
                    email= "";
                    message= "";
                    status= 'Message Sent!';
                    console.log("\nMessage Sent!\n");
                    res.redirect('/contact#contactForm');
                }
            });
        }
    });
});

router.get('/preview', function(req, res, next) {
    res.render('templates/emailTemplate-fixIT');
})

module.exports = router;
