var ResultsView = (function (ko) {
    "use strict";
    function ResultsView(searchController) {
        var self = this;
        self.results = ["foo", "bar", "baz"];
    }
    ko.components.register('results-view', {
        viewModel: {
            createViewModel: function (params) {
                return params.viewModel;
            }
        },
        template: "<div data-bind='foreach: results'><span data-bind='text: $data'</span></div>"
    });
    return ResultsView;
}(ko));
