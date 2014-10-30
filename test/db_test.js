
var persis = require('../lib/db');

var url = 'mongodb://localhost:27017/ikgroup';

persis.init(url, function(p){

	console.log('persis connected: ' + p.connected);
	p.addMessage({
		content : '不管你对我如何冷淡，都没可能冷却我内心对你炙热的爱！',
		username : 'kikyou1986',
		date : new Date(),
		location : '上海 世纪公园'
	});
});