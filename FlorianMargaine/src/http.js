'use strict';

var Promise = require('bluebird');

module.exports = {
    getJSON: function(url) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest;
            xhr.responseType = 'json';
            xhr.addEventListener('error', reject);
            xhr.addEventListener('load', resolve);
            xhr.open('GET', url);
            xhr.send(null);
        });
    }
};
