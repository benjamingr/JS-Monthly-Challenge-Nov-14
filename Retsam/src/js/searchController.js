function ajaxGetAsync(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("error", reject);
        xhr.addEventListener("load", function (event) {
            resolve(JSON.parse(xhr.response));
        });
        xhr.open("GET", url);
        xhr.send(null);
    });
}
var searchController = (function (ko) {
    "use strict";
    var searchController = {
        search: function (options) {
            //*
            var url = "http://demo2601246.mockable.io?site=stackoverflow";
            /*/
            var url = "http://api.stackexchange.com/search/excerpts?site=stackoverflow";
            //*/
            if (!options.text) {
                searchController.searchResults([]);
                return;
            }
            url += "&q=" + encodeURIComponent(options.text);
            ajaxGetAsync(url).then(function (response) {
                var results = response.items;
                results = _.filter(results, { item_type: "question" });
                searchController.searchResults(results);
            });
        },
        searchResults: ko.observableArray([])
    };
    return searchController;
}(ko));
