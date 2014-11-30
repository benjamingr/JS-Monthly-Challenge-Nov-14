interface SearchController {
    search(s: SearchOptions): void;
    searchResults: KnockoutObservableArray<any>;
    tagExists(tag: string) : Promise<boolean>;
}
    
interface SearchOptions {
    text?: string
    tags?: string[]
}

function ajaxGetAsync(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("error", reject);
        xhr.addEventListener("load", (event) => {resolve(JSON.parse(xhr.response))});
        xhr.open("GET", url);
        xhr.send(null);
    })
}

var searchController = (function (ko: KnockoutStatic) {
    "use strict";

    var searchController = {
        search: function (options: SearchOptions ) {
            /*
            var url = "http://demo2601246.mockable.io?site=stackoverflow"
            /*/
            var url = "http://api.stackexchange.com/search/excerpts?site=stackoverflow";
            //*/

            if(!options.text && !(options.tags && options.tags.length)) {
                searchController.searchResults([]);
                return;
            }

            if(options.text) {
                url += "&q="+encodeURIComponent(options.text);
            }

            if(options.tags && options.tags.length) {
                url += "&tagged="+options.tags.join(";");
            }

            ajaxGetAsync(url).then(function (response : any) {
                var results = response.items;

                results = _.filter(results, {item_type: "question"})

                searchController.searchResults(results);
            })
        },

        tagExists: function (tag : string) {
            var url="http://api.stackexchange.com/tags/"+tag+"/info?site=stackoverflow";

            return ajaxGetAsync(url).then(function (response : any) {
                return response.items.length > 0;
            });
        },

        searchResults: ko.observableArray([])
    };

    return searchController;
}(ko));