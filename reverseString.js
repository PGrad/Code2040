var request = require('request')
var requestPost = require('requestPost')
var fs = require ('fs')
var esrever = require('esrever') //Why not just split and reverse? https://github.com/mathiasbynens/esrever

var apiKey = fs.readFileSync ('apikey.txt', 'utf8').trim();

var postToken = {
	'token': apiKey 
}

var url = 'http://challenge.code2040.org/api/reverse';

//This module can also process the response of POST requests through a callback function passed to it.
requestPost (url, postToken, bodyCallback);

function bodyCallback (body) {
	var postTokenAndRevString = {
		'token': apiKey,
		'string': esrever.reverse (body)
	}
	var url = 'http://challenge.code2040.org/api/reverse/validate';

	//The requestPost module can be used for a continuous cycle of POST-response-POST communication with a server.
	requestPost (url, postTokenAndRevString);
}



