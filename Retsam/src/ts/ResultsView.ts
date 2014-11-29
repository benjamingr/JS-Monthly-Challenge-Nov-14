///<reference path="knockout.d.ts"/>
var ResultsView = (function (ko : KnockoutStatic) {
    "use strict"; 

    function ResultsView(searchController) {
        var self = this;

        self.results = ["foo", "bar", "baz"].map(function (data) {
            return new ResultsItem(data);
        });
    }


    function ResultsItem(resultData) {
        var self = this;


    }

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
        template: "RESULTS!"
    });

    return ResultsView;
}(ko));