
var MongoClient = require('mongodb').MongoClient;

//the database object
var _db = null;

//collections
var _userCol = null;
var _msgCol = null;

var COLLECTION_MESSAGE = 'message';
var COLLECTION_USER = 'user';

// connection status
exports.connected = false;

exports.init = function(url, cb){

	MongoClient.connect(url, function(err, db){
		if(err){
			throw err;
		}else {
			_db = db;
			exports.connected = true;
		}
		cb(exports);
	});
};

exports.addMessage = function(msg){
	if(!_msgCol){
		_msgCol = _db.collection(COLLECTION_MESSAGE);
	}
	_msgCol.insertOne(msg, function(err, r){
		if(err){
			console.error(err);
		}else {
			console.log("One message inserted!");
		}
	})
};


exports.close = function(){
	_db.close();
};

