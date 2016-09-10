guess1Space.onclick=function(){

 if(quiz1.answer1Array[quiz1.currentIndex]===quiz1.trueAnswerArray[quiz1.currentIndex]){

    quiz1.getScore();
    quiz1.nextQuestion();
    showQuiz(quiz1.currentIndex);
  }
  else if(quiz1.answer1Array[quiz1.currentIndex]!==quiz1.trueAnswerArray[quiz1.currentIndex]){
    quiz1.nextQuestion();
    showQuiz(quiz1.currentIndex);
  }
  if(quiz1.gameOver){
    showGameOver(quiz1.score);
  }
  
}



guess2Space.onclick=function(){
  
  if(quiz1.answer2Array[quiz1.currentIndex]===quiz1.trueAnswerArray[quiz1.currentIndex]){
    quiz1.getScore();
    quiz1.nextQuestion();
    showQuiz(quiz1.currentIndex);
  }
  else if (quiz1.answer2Array[quiz1.currentIndex]!==quiz1.trueAnswerArray[quiz1.currentIndex]){
    quiz1.nextQuestion();
    showQuiz(quiz1.currentIndex);
  }
    if(quiz1.gameOver){
    showGameOver(quiz1.score);
  }
  
}

tryAgain.onclick=function(){
  quiz1.restart();
  showQuiz(quiz1.currentIndex);
}

showQuiz(quiz1.currentIndex);