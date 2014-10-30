/**
 * ik-searchbox test RESTful.
 */


var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    var data = ['Mike', 'Jordan', 'Cristiano', 'Glenlivet', 'York', 'Owen', 'Ramesy'];
    res.json(data);
});

router.post('/', function(req, res) {
	var name = req.body.name;
	var email = req.body.email;
    var data = [name, email];
    res.json(data);
});

router.get('/a/:a/b/:b', function(req, res) {
	var a = req.params.a;
	var b =req.params.b;
    var data = [a,b];
    res.json(data);
});

module.exports = router;
