var argscheck = require('cordova/argscheck'),
    channel = require('cordova/channel'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec'),
    cordova = require('cordova');

function Echo () {
}

Echo.prototype.echo = function (str, callback) {
    exec(callback, function(err) {
        callback('Nothing to echo.');
    }, "Echo", "echo", [str]);
}

module.exports = new Echo();