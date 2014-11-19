'use strict';

var ee = require('../main').ee;

module.exports = function() {
    var questions = ko.observableArray();
    questions.extend({
        rateLimit: {
            timeout: 500,
            method: "notifyWhenChangesStop"
        }
    });
    ee.on('create', function(question) {
        questions.push(question);
    });

    return {
        questions: questions
    };
};
