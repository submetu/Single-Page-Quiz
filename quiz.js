function quiz(){
  this.questionArray=[];
  this.answer1Array=[];
  this.answer2Array=[];
  this.trueAnswerArray=[];
  this.currentIndex=0;
  this.gameOver=false;
  this.score=0;
}
quiz.prototype.add=function(questionAnswer){
    this.questionArray.push(questionAnswer.question);
    this.answer1Array.push(questionAnswer.answer1);
    this.answer2Array.push(questionAnswer.answer2);
    this.trueAnswerArray.push(questionAnswer.trueAnswer);
}
quiz.prototype.nextQuestion=function(){
  
  if(this.currentIndex >= this.questionArray.length-1){
    this.gameOver=true;
  }
  this.currentIndex++;
}
quiz.prototype.getScore=function(){
  this.score++;
}
quiz.prototype.restart=function(){
  this.score=0;
  this.currentIndex=0;
  this.gameOver=false;
}
var quiz1=new quiz();
quiz1.add(questionAnswer1);
quiz1.add(questionAnswer2);
quiz1.add(questionAnswer3);
quiz1.add(questionAnswer4);



