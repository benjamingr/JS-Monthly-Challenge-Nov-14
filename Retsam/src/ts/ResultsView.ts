
"use strict"; 

class ResultsView {

    results: KnockoutComputed<ResultsItem[]>;

    constructor(searchController : SearchController) {
        var self = this;

        self.results = ko.computed(function () {
            return searchController.searchResults().map(function (resultData) {
                return new ResultsItem(resultData);
            })
        });
    }
}

class ResultsItem {
    url: string;
    title: string;
    constructor(resultData) {
        var self = this;

        self.url = "http://stackoverflow.com/questions/"+resultData.question_id;
        self.title = resultData.title;
    }
}

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