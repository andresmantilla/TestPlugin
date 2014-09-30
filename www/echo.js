var exec = require('cordova/exec');

/**
 * Create a new instance of Bluetooth(Plugin).
 *
 * @class       Bluetooth
 * @classdesc   BluetoothPlugin for cordova 3.0.0+ (PhoneGap).
 */
var Echo = function()
{
    
};

Echo.prototype.echo = function(str, callback) {
	cordova.exec(callback, function(err) {
		callback('Nothing to echo.');
	}, "Echo", "echo", [ str ]);
};


var echo   = new Echo();
module.exports  = echo;