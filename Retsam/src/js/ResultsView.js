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
        var url = "http://stackoverflow.com/questions/" + resultData.question_id;
        self.title = resultData.title;
        self.excerpt = resultData.excerpt;
        self.navigate = function () {
            window.open(url, '_blank');
        };
        self.tags = resultData.tags;
        self.tagClicked = function (tag) {
            var url = "http://stackoverflow.com/tags/" + tag + "/info";
            window.open(url, '_blank');
        };
    }
    return ResultsItem;
})();
ko.components.register('results-view', {
    viewModel: {
        createViewModel: function (params) {
            return params.viewModel;
        }
    },
    template: {
        element: "resultsView"
    }
});
ko.components.register('results-item', {
    viewModel: {
        createViewModel: function (params) {
            return params.viewModel;
        }
    },
    template: {
        element: "resultsItem"
    }
});
