
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
    title: string;
    excerpt: string;
    navigate: () => void;
    tagClicked: (string) => void;
    tags: string[];

    constructor(resultData) {
        var self = this;

        var url = "http://stackoverflow.com/questions/"+resultData.question_id;
        self.title = resultData.title;

        self.excerpt = resultData.excerpt;

        self.navigate = function () {
            window.open(url,'_blank');
        }

        self.tags = resultData.tags;

        self.tagClicked = function (tag) {
            var url = "http://stackoverflow.com/tags/"+tag+"/info";
            window.open(url,'_blank');
        }
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