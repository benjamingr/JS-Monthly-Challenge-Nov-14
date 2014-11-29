"use strict";
var ResultsView = (function () {
    function ResultsView(searchController) {
        var self = this;
        self.results = ko.computed(function () {
            return searchController.searchResults().map(function (resultData) {
                return new ResultsItem(resultData);
            });
        });
    }
    return ResultsView;
})();
var ResultsItem = (function () {
    function ResultsItem(resultData) {
        var self = this;
        self.url = "http://stackoverflow.com/questions/" + resultData.question_id;
        self.title = resultData.title;
    }
    return ResultsItem;
})();
ko.components.register('results-view', {
    viewModel: {
        createViewModel: function (params) {
            return params.viewModel;
        }
    },
    template: "<div data-bind='foreach: results'><results-item params='viewModel: $data'></results></div>"
});
ko.components.register('results-item', {
    viewModel: {
        createViewModel: function (params) {
            return params.viewModel;
        }
    },
    template: "<a data-bind='text: title, attr: {href: url}' target='_blank'></span>"
});
