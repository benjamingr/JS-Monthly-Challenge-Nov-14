/*jshint newcap:false, devel:true*/
/*global ko*/

'use strict';

function QuestionListModel (questionStream) {
    var list = {
        questions : ko.observableArray([])
    };

    questionStream.subscribe(function (question) {
        list.questions.push(QuestionModel(question));
    });

    return list;
}

function QuestionModel (questionObject) {
    var question = {};

    // turn snake_case into camelCase
    Object.keys(questionObject).forEach(function (key) {
        var saneKey = key.replace(/_(.)/g, function ($0, $1) {
            return $1.toUpperCase();
        });

        question[saneKey] = questionObject[key];
    });

    question.postQuality = ko.computed(function () {
        return question.score > 7 ? 'good' :
            question.score >= 0 ? 'neutral' :
            'bad';
    });

    console.log(question);

    return question;
}
