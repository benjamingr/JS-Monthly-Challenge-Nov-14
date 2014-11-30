class SearchView {
    searchText : KnockoutObservable<string>;
    newTagName: KnockoutObservable<string>;
    tags: KnockoutObservableArray<string>;
    tagClicked(tag: string) : void {}

    addTag() : void {
        var self = this;

        var newTagName = self.newTagName();
        self.newTagName("");

        searchController.tagExists(newTagName)
        .then(function (exists) {
            if(exists) {
                self.tags.push(newTagName);
            }
        });

    }

    constructor(searchController : SearchController) {
        var self = this;
        self.searchText = ko.observable("");
        self.newTagName = ko.observable("");
        self.tags = ko.observableArray([]);

        //Define here to capture self in closure
        self.tagClicked = function (tag : string) {
            self.tags.remove(tag);
        }

        function doSearch() {
            searchController.search({
                text: self.searchText(),
                tags: self.tags()
            });

            refreshEveryMinute(); //Restart the 60 second timeout
        };

        self.searchText.subscribe(_.debounce(doSearch, 1000));

        self.tags.subscribe(doSearch);

        var refreshEveryMinute = _.debounce(doSearch, 60000);

    }
}

ko.components.register('search-view', {
    viewModel: {
        createViewModel: function (params) {
            return params.viewModel;
        }
    },
    template: {
        element: "searchView"
    }
});