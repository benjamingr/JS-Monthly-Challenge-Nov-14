var SearchView = (function () {
    function SearchView(searchController) {
        var self = this;
        self.searchText = ko.observable("");
        self.searchText.subscribe(_.debounce(function () {
            searchController.search({
                text: self.searchText()
            });
        }, 1000));
    }
    return SearchView;
})();
ko.components.register('search-view', {
    viewModel: {
        createViewModel: function (params) {
            return params.viewModel;
        }
    },
    template: "<label for='searchText'>Search Text: </label><input id='searchText' type='text' data-bind='textInput: searchText'></input>"
});
