function Question(question){
  this.question=question.q;
  this.answer1=question.a1;
  this.answer2=question.a2;
  this.trueAnswer=question.t;
}

var questionAnswer1={
  q:"What is my name?",
  a1:"Subhan",
  a2:"Kashi",
  t:"Subhan"
}
var questionAnswer2={
  q:"What is my age??",
  a1:100,
  a2:25,
  t:25
}
var questionAnswer3={
  q:"What is the capital of Turkey?",
  a1:"Istanbul",
  a2:"Ankara",
  t:"Istanbul"
}
var questionAnswer4={
  q:"What is the color of the Sun",
  a1:"Blue",
  a2:"Yellow",
  t:"Yellow"
}
var questionAnswer5={
  q:"What is the longest river in the world?",
  a1:"Amazon River",
  a2:"Nile",
  t:"Amazon River"
}
var questionAnswer6={
  q:"How many electrons are there in a nitrogen atom?",
  a1:14,
  a2:7,
  t:7
}
var questionAnswer1=new Question(questionAnswer1);
var questionAnswer2=new Question(questionAnswer2);
var questionAnswer3=new Question(questionAnswer3);
var questionAnswer4=new Question(questionAnswer4);
var questionAnswer5=new Question(questionAnswer5);
var questionAnswer6=new Question(questionAnswer6);



