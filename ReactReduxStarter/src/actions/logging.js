import axios from 'axios';
import config from '../config/config';

var rootURL = process.env.LOGURL || config.logginApi.rootURL;

module.exports.info= function(message){
	var body = {
		message:message
	};
	axios.post(`${rootURL}/info`,body)
  	.catch(function (error) {
    	console.log(error);
  	});
}

module.exports.warn= function(message){
	var body = {
		message:message
	};
	axios.post(`${rootURL}/warn`,body)
  	.catch(function (error) {
    	console.log(error);
  	});
}

module.exports.error= function(message){
	var body = {
		message:message
	};
	axios.post(`${rootURL}/error`,body)
  	.catch(function (error) {
    	console.log(error);
  	});
}