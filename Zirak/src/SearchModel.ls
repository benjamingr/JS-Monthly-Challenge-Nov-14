SearchModel = (postObserver) ->
    generateApiUrl = (q) ->
        "https://api.stackexchange.com/2.2/search/excerpts?order=desc&sort=activity&q=#{encodeURIComponent(q)}&site=stackoverflow&filter=!.FjueITs9Sv-y7SwxnSKteO45ZXd5"

    ret =
        doubt : ko.observable()

    ret.delayedDoubt = ret.doubt.extend(
        rateLimit :
            timeout : 1000
            method  : \notifyWhenChangeStop
    )

    console.log this

    ret.delayedDoubt.subscribe (doubt) ->
        console.log 'I am the genie'
        return unless doubt?

        xhr = new XMLHttpRequest
        xhr.open \GET, generateApiUrl(doubt)
        # xhr.open \GET, \posts.js
        xhr.responseType = \json

        xhr.onload = ->
            console.log \booya
            [postObserver.onNext post for post in xhr.response.items]
            return

        xhr.send()
        return
    ret
