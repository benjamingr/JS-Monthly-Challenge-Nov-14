var QuestionListModel = (function(questionStream) {
  var list = { questions: ko.observableArray([  ]) };
  questionStream.subscribe((function(question) {
    return list.questions.push(QuestionModel(question));
  }));
  return list;
});

