var express = require('express');

var nodemailer = require('nodemailer');

var generator = require('xoauth2').createXOAuth2Generator({
    user: 'fixit.solution.v1@gmail.com',
    clientId: '917097726441-p35t6fo03goi9u5ct6k6n8rg0mv19fbc.apps.googleusercontent.com',
    clientSecret: 'bIIhfXrbunz6lwWJ-7lyYyEl',
    refreshToken: '1/yhNux2J9zxZ6Tu-NmNzKJm_GSe_7zvf6uD5SPwvW9Xk',
    accessToken: 'ya29.GlvlA8oq4Cmm-LR7KFGOAdB6bfn1S_vr7HkQnqpjXyV7H3QflTNjPcgG6QjiZXq3AC-c_wu67AcHCCIEa-mitEszJAkRJZASTpPBH-_4N2RHVFa4XFlGjltkRAxE' // optional
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

