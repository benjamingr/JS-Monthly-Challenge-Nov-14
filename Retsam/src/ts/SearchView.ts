///<reference path="knockout.d.ts"/>

var SearchView = (function (ko : KnockoutStatic) {
    "use strict";

    function SearchView(searchController) {
        var self = this;

        self.searchText = ko.observable("foo");
    }

    ko.components.register('search-view', {
        viewModel: {
            createViewModel: function (params) {
                return params.viewModel;
            }
        },
        template: "<label for='searchText'>Search Text: </label><input id='searchText' type='text' data-bind='value: searchText'></input>"
    });

    return SearchView;
}(ko));