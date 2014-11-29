///<reference path="dts/knockout.d.ts"/>
///<reference path="dts/lodash.d.ts"/>
///<reference path="dts/bluebird.d.ts"/>

var vm = (function (ko : KnockoutStatic, SearchView, ResultsView, searchController : SearchController) {

    var vm = {
        searchView: new SearchView(searchController),
        resultsView: new ResultsView(searchController)
    };

    ko.applyBindings(vm);

    return vm;
}(ko, SearchView, ResultsView, searchController));
