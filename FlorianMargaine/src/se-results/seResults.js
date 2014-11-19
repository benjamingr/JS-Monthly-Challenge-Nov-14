'use strict';

var ee = require('../main').ee;

module.exports = function() {
    var questions = ko.observableArray();

    ee.on('create', function(question) {
        questions.push(question);
    });

    return {
        questions: questions
    };
};
