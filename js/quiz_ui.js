var heading=document.getElementById("heading");
var questionSpace=document.getElementById("question");
var guess1Space=document.getElementById("guess0");
var guess2Space=document.getElementById("guess1");
var progress=document.getElementById("progress");
var tryAgain=document.getElementById("tryAgain");
var $quizOptions=$('<div></div>');
var $quizButton1=$('<button class="btn--default" id="quiz1">Quiz 1</button>');
var $quizButton2=$('<button class="btn--default" id="quiz2">Quiz 2</button>');
var $nameShow=$('<h2></h2>')
$('#nameDiv').append($nameShow);
$quizOptions.append($quizButton1).append($quizButton2).hide();
$('#quizOptions').append($quizOptions);


function showQuiz(i,quiz){
  $quizOptions.hide(); 
  $("#heading").hide();
  guess1Space.style.display="block";
  guess2Space.style.display="block";
  progress.style.display="block";
  tryAgain.style.display="none";
  questionSpace.innerHTML=quiz.questionArray[i];
  guess1Space.innerHTML=quiz.answer1Array[i];
  guess2Space.innerHTML=quiz.answer2Array[i];
  progress.innerHTML="Question "+(i+1)+" of "+quiz.questionArray.length;
  $nameShow.show();
}
  
function showGameOver(score,quizType){
  $quizOptions.hide();
  tryAgain.style.display="block";
  heading.innerHTML="GAME OVER";
  questionSpace.innerHTML="Your Score is "+score+" out of "+quizType.questionArray.length;
  tryAgain.innerHTML="Try Again?";
  guess1Space.style.display="none";
  guess2Space.style.display="none";
  progress.style.display="none";
  $nameShow.show();
  name="Good job completing the quiz "+$('#name').val()+"!";
  $nameShow.text(name);
}
function showMainPage(){
    $("#heading").show();
    guess1Space.style.display="none";
    guess2Space.style.display="none";
    progress.style.display="none";
    tryAgain.style.display="none";
    heading.innerHTML="Welcome!";
    questionSpace.innerHTML="Please select a quiz";
    $quizOptions.show();
    $('#name').show();
    $nameShow.hide();
}




