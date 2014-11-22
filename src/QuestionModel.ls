QuestionModel = (questionObject) ->
    question = {}

    # turn snake_case into camelCase
    Object.keys(questionObject).forEach (key) ->
        saneKey = key.replace(/_(.)/g, ($0, $1) -> $1.toUpperCase())

        question[saneKey] = questionObject[key]

    question.postQuality = ko.computed ->
        if question.score > 7
            'good'
        else if question.score >= 0
            'neutral'
        else
            'bad'

    console.log question

    question
