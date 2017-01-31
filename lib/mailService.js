var express = require('express');

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

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        xoauth2: generator
    }
});

var SENDERS_NAME = 'fixIT Team';

exports.sendMail = function(fromAddress, toAddress, subject, content) {
	
	var messageInfo = {
        from: SENDERS_NAME + ' <' + fromAddress + '>',
        to: toAddress,
        subject: subject,
        html: content
	};

	transporter.sendMail(messageInfo, function(error, response) {
		if(error) {
            console.log("\nMessage not sent! Try again." + "\n");
        }
        else {
            console.log("\nMessage Sent!" + "\n");
        }
	});
} 

