'use strict';

module.exports = function() {
    return {
        search: search
    };
};

var getJSON = require('../http').getJSON;

function search(form) {
    findQuestions(form.search.value).map(createQuestion).done();
}

function createQuestion(question) {
    console.log(question);
}

function findQuestions(search) {
    return getJSON(makeUrl(search)).then(function(obj) {
        return obj.currentTarget.response.items; // wut?
    });
}

function makeUrl(search) {
    return 'http://api.stackexchange.com/2.2/search/excerpts?order=desc&sort=activity&body=' + search + '&site=stackoverflow&filter=!)Q29nqjGcyvcvUN(gjnL1kIc';
}
