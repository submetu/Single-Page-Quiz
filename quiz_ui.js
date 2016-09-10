var heading=document.getElementById("heading");
var questionSpace=document.getElementById("question");
var guess1Space=document.getElementById("guess0");
var guess2Space=document.getElementById("guess1");
var progress=document.getElementById("progress");
var tryAgain=document.getElementById("tryAgain");

function showQuiz(i){
  guess1Space.style.display="block";
  guess2Space.style.display="block";
  progress.style.display="block";
  tryAgain.style.display="none";
  questionSpace.innerHTML=quiz1.questionArray[i];
  guess1Space.innerHTML=quiz1.answer1Array[i];
  guess2Space.innerHTML=quiz1.answer2Array[i];
  progress.innerHTML="Question "+(i+1)+" of "+quiz1.questionArray.length;
}
  
function showGameOver(score){
  tryAgain.style.display="block";
  heading.innerHTML="GAME OVER";
  questionSpace.innerHTML="Your Score is "+score;
  tryAgain.innerHTML="Try Again?";
  guess1Space.style.display="none";
  guess2Space.style.display="none";
  progress.style.display="none";
  
}




