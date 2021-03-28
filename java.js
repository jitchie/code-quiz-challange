const startButton = document.getElementById("startButton");
const startPage = document.getElementById("startPage");
const stepOne = document.getElementById("stepOne");
const stepTwo = document.getElementById("stepTwo");
const stepThree = document.getElementById("stepThree");
const stepFour = document.getElementById("stepFour");
const stepFive = document.getElementById("stepFive");
const timeLeftDisplay = document.getElementById("timeLeftDisplay");
const potentialAnswer = document.getElementsByClassName("potentialAnswer");
const displayAnswer = document.getElementById("message-display");

var timeLeft = 60;

function countDown() {
 
  setInterval(function(){
    if (timeLeft <= 0){
      clearInterval(timeLeftDisplay = "");
      
    }
    timeLeft -= 1;
    timeLeftDisplay.innerText = timeLeft;
    
    
  }, 1000)
  
};
function startQuiz() {
  countDown();
  stepOne.style.display = "flex";
  startPage.style.display = "none";
};

stepOne.addEventListener('click', function(event) {
  var element = event.target
  if (element.matches(".incorrect")){
    //display message here make fucntion to push message to screen
    stepOne.style.display = "none";
    stepTwo.style.display = "flex";
    timeLeft = timeLeft - 10;
  } else if (element.matches(".correct")) {
    //correct message here functions diplay
    stepOne.style.display = "none";
    stepTwo.style.display = "flex";
  }

})

stepTwo.addEventListener('click', function(event) {
  var element = event.target
  if (element.matches(".incorrect")){
    //display message here make fucntion to push message to screen
    stepTwo.style.display = "none";
    stepThree.style.display = "flex";
    timeLeft = timeLeft - 10;
  } else if (element.matches(".correct")) {
    //correct message here functions diplay
    stepTwo.style.display = "none";
    stepThree.style.display = "flex";
  }

})

stepThree.addEventListener('click', function(event) {
  var element = event.target
  if (element.matches(".incorrect")){
    //display message here make fucntion to push message to screen
    stepThree.style.display = "none";
    stepFour.style.display = "flex";
    timeLeft = timeLeft - 10;
  } else if (element.matches(".correct")) {
    //correct message here functions diplay
    stepThree.style.display = "none";
    stepFour.style.display = "flex";
  }

})

stepFour.addEventListener('click', function(event) {
  var element = event.target
  if (element.matches(".incorrect")){
    //display message here make fucntion to push message to screen
    stepFour.style.display = "none";
    stepFive.style.display = "flex";
    timeLeft = timeLeft - 10;
  } else if (element.matches(".correct")) {
    //correct message here functions diplay
    stepFour.style.display = "none";
    stepFive.style.display = "flex";
  }

})

stepFive.addEventListener('click', function(event) {
  var element = event.target
  if (element.matches(".incorrect")){
    //display message here make fucntion to push message to screen
    stepFive.style.display = "none";
    stepFive.style.display = "flex";
    timeLeft = timeLeft - 10;
  } else if (element.matches(".correct")) {
    //correct message here functions diplay
    stepFour.style.display = "none";
    stepFive.style.display = "flex";
  }

})
