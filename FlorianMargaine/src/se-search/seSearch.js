'use strict';

module.exports = function() {
    return {
        search: search
    };
};

var getJSON = require('../http').getJSON;
var ee = require('../main').ee;

function search(form) {
    findQuestions(form.search.value).map(createQuestion).done();
}

function createQuestion(question) {
    ee.emit('create', question);
    console.log(question);
}

function findQuestions(search) {
    // no idea why .get('items') doesn't work right away.
    // it seems I get an XMLHttpRequestProgressEvent object...
    return getJSON(makeUrl(search)).get('currentTarget').get('response').get('items');
}

function makeUrl(search) {
    return 'http://api.stackexchange.com/2.2/search/excerpts?order=desc&sort=activity&body=' + search + '&site=stackoverflow&filter=!)Q29nqjGcyvcvUN(gjnL1kIc';
}
