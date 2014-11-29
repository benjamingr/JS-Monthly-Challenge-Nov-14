///<reference path="knockout.d.ts"/>

interface SearchController {
    foo(s: string): boolean;
}
    
var searchController = (function (ko: KnockoutStatic) {
    "use strict";

    return {
        foo: function (s ) {
            return true;
        }
    };
}(ko));