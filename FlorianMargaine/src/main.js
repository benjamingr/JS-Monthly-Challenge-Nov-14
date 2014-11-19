'use strict';

var fs = require('fs');

ko.components.register('se-search', {
    viewModel: require('./se-search/seSearch'),
    template: fs.readFileSync(__dirname + '/se-search/seSearch.html', 'utf8')
});

ko.components.register('se-results', {
    viewModel: require('./se-results/seResults'),
    template: fs.readFileSync(__dirname + '/se-results/seResults.html', 'utf8')
});

ko.applyBindings();
