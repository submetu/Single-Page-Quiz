var quizType="";
var name;
$('#quiz1').on("click",function(){
    quizType=quiz1;
    showQuiz(quizType.currentIndex,quizType);
    $('#name').hide();
    name="Hi "+$('#name').val()+"!";
    $nameShow.text(name);
});
$('#quiz2').on("click",function(){
    quizType=quiz2;
    showQuiz(quizType.currentIndex,quizType);
    $('#name').hide();
    name="Hi "+$('#name').val()+"!";
    $nameShow.text(name);
});
guess1Space.onclick=function(){
    if(quizType.answer1Array[quizType.currentIndex]===quizType.trueAnswerArray[quizType.currentIndex]){
    quizType.getScore();
    quizType.nextQuestion();
    showQuiz(quizType.currentIndex,quizType);
    }
    else if(quizType.answer1Array[quizType.currentIndex]!==quizType.trueAnswerArray[quizType.currentIndex]){
    quizType.nextQuestion();
    showQuiz(quizType.currentIndex,quizType);
    }
    if(quizType.gameOver){
    showGameOver(quizType.score,quizType);
    }
}



guess2Space.onclick=function(){
    
    
    if(quizType.answer2Array[quizType.currentIndex]===quizType.trueAnswerArray[quizType.currentIndex]){
    quizType.getScore();
    quizType.nextQuestion();
    showQuiz(quizType.currentIndex,quizType);
    }
    else if (quizType.answer2Array[quizType.currentIndex]!==quizType.trueAnswerArray[quizType.currentIndex]){
    quizType.nextQuestion();
    showQuiz(quizType.currentIndex,quizType);
    }
    if(quizType.gameOver){
    showGameOver(quizType.score,quizType);
    }

}

tryAgain.onclick=function(){
    quizNum=0;
    quizType.restart();
    showMainPage();
}

showMainPage();