SearchModel = (postObserver) ->
    ret =
        doubt : ko.observable()

    ret.delayedDoubt = ret.doubt.extend(
        rateLimit :
            timeout : 5000
            method  : \notifyWhenChangeStop
    )

    console.log this

    ret.delayedDoubt.subscribe (doubt) ->
        console.log 'I am the genie'
        return unless doubt?

        xhr = new XMLHttpRequest
        xhr.open \GET, '/posts.js'
        xhr.responseType = \json

        xhr.onload = ->
            console.log \booya

        xhr.send()
    ret
