const startButton = document.getElementById("startButton");
const startPage = document.getElementById("startPage");
const stepOne = document.getElementById("stepOne");
const stepTwo = document.getElementById("stepTwo");
const stepThree = document.getElementById("stepThree");
const stepFour = document.getElementById("stepFour");
const stepFive = document.getElementById("stepFive");
const timeLeftDisplay = document.getElementById("timeLeftDisplay");
const potentialAnswer = document.getElementsByClassName("potentialAnswer");
const displayAnswer = document.querySelector("#message-display");
const scoreInputForm = document.getElementById("saveResult")
let pointTracker = 0;
let yourScore=0;

var timeLeft = 60;
// countdown timer displayed in head of document
function countDown() {
 
  setInterval(function(){
    if (timeLeft <= 0){
      clearInterval(timeLeftDisplay = "");
      
    }
    timeLeft -= 1;
    timeLeftDisplay.innerText = timeLeft;
    
    
  }, 1000)

  
  
};

// function moves from landing page to first question of quiz with a start button
function startQuiz() {
  countDown();
  stepOne.style.display = "flex";
  startPage.style.display = "none";
};
//question one using event.target and class matching for response
//else if contains point tracker to later use to give result
stepOne.addEventListener('click', function(event) {
  var element = event.target
  if (element.matches(".incorrect")){
    displayAnswer.textContent = "incorrect"
    setTimeout(function(){ displayAnswer.style.display = "none"; }, 500);
    stepOne.style.display = "none";
    stepTwo.style.display = "flex";
    timeLeft = timeLeft - 10;
  } else if (element.matches(".correct")) {
    displayAnswer.textContent = "correct"
    stepOne.style.display = "none";
    stepTwo.style.display = "flex";
    pointTracker++;
    setTimeout(function(){ displayAnswer.style.display = "none"; }, 500);
  }
});

stepTwo.addEventListener('click', function(event) {
  var element = event.target
  if (element.matches(".incorrect")){
    displayAnswer.textContent = "incorrect"
    stepTwo.style.display = "none";
    stepThree.style.display = "flex";
    timeLeft = timeLeft - 10;
    setTimeout(function(){ displayAnswer.style.display = "none"; }, 500);
  } else if (element.matches(".correct")) {
    displayAnswer.textContent = "correct"
    stepTwo.style.display = "none";
    stepThree.style.display = "flex";
    pointTracker++;
    setTimeout(function(){ displayAnswer.style.display = "none"; }, 500);
  }

})

stepThree.addEventListener('click', function(event) {
  var element = event.target
  if (element.matches(".incorrect")){
    displayAnswer.textContent = "incorrect"
    stepThree.style.display = "none";
    stepFour.style.display = "flex";
    timeLeft = timeLeft - 10;
    setTimeout(function(){ displayAnswer.style.display = "none"; }, 500);
  } else if (element.matches(".correct")) {
    displayAnswer.textContent = "correct"
    stepThree.style.display = "none";
    stepFour.style.display = "flex";
    pointTracker++;
    setTimeout(function(){ displayAnswer.style.display = "none"; }, 500);
  }

})

stepFour.addEventListener('click', function(event) {
  var element = event.target
  if (element.matches(".incorrect")){
    displayAnswer.textContent = "incorrect"
    stepFour.style.display = "none";
    stepFive.style.display = "flex";
    timeLeft = timeLeft - 10;
    setTimeout(function(){ displayAnswer.style.display = "none"; }, 500);
  } else if (element.matches(".correct")) {
    displayAnswer.textContent = "correct";
    stepFour.style.display = "none";
    stepFive.style.display = "flex";
    pointTracker++;
    setTimeout(function(){ displayAnswer.style.display = "none"; }, 500);
  }

})

stepFive.addEventListener('click', function(event) {
  var element = event.target
  if (element.matches(".incorrect")){
    displayAnswer.textContent = "incorrect"
    stepFive.style.display = "none";
    scoreInputForm.style.display = "flex";
    timeLeft = timeLeft - 10;
    setTimeout(function(){ displayAnswer.style.display = "none"; }, 500);
  } else if (element.matches(".correct")) {
    displayAnswer.textContent = "correct"
    stepFour.style.display = "none";
    scoreInputForm.style.display = "flex";
    pointTracker++;
    setTimeout(function(){ displayAnswer.style.display = "none"; }, 500);
  }

})




function clearDisplay(){

  setTimeout(function(){ displayAnswer.style.display = "none"; }, 500);
  
  

};