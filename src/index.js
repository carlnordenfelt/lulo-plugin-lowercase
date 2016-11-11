'use strict';

var pub = {};

pub.validate = function (event) {
    if (!event.ResourceProperties.Value) {
        throw new Error('Missing required property Value');
    }
};

pub.create = function (event, _context, callback) {
    var lowerCaseValue = event.ResourceProperties.Value.toLowerCase();
    setImmediate(function () {
        callback(null, { physicalResourceId: lowerCaseValue });
    });
};

pub.delete = function (_event, _context, callback) {
    return setImmediate(callback);
};

pub.update = function (event, context, callback) {
    return pub.create(event, context, callback);
};

module.exports = pub;
