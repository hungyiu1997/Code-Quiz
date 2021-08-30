var startScreenEl = document.getElementById("startscreen");
var startQuizBtn = document.getElementById("startquiz");
var questionScreenEl = document.getElementById("questionscreen");
var questionTextEl = document.getElementById("question-text");
var choicesEl = document.getElementById("choices");
var endScreen = document.getElementById("endscreen");
var endScore = document.getElementById("endscore");
var initialsEl = document.getElementById("initials");
var submit = document.getElementById("submit");
var timeEl = document.getElementById("time");
var highScoreBtn = document.querySelector("#highscore-btn");
var highScoreEl = document.querySelector('#highscore-page');
var highScorePEl = document.querySelector('#highscore');
var restartBtnEl = document.querySelector("#restart-quiz");
var time = 60;
var userChoice = "";
var wins = 0;
var losses = 0;
var timerId;
var currentQuestionIndex = 0;

var quizQuestions = [
  {
    question: "When does a player receive a red card on pitch?",
    choices: [
      "When a player commit a fault",
      "When a player receive a second yellow card",
      "When a player conduct an unprofessional conduct",
      "All of the above.",
    ],
    answer: "All of the above.",
  },
  {
    question: "When is video assistant referee (VAR) used?",
    choices: [
      "When there a clear and obvious error from the referee",
      "When a player commit a fault",
      "When there is a penalty shout",
      "When an on pitch player request it",
    ],
    answer: "When there is a clear and obvious error from the referee",
  },
  {
    question: "Which one is not a current European club tournament?",
    choices: [
      "Champions League",
      "Europa League",
      "European Conference League",
      "UEFA Cup",
    ],
    answer: "UEFA Cup",
  },
  {
    question: "When was the last FIFA World Cup hosted?",
    choices: ["Russia", "Germany", "Brazil", "Chlie"],
    answer: "Russian",
  },
  {
    question: "Who was the winner of the 2014 FIFA World Cup in Brazil?",
    choices: ["Brazil", "Germany", "Argentina", "The Netherlands"],
    answer: ["Germany"],
  },
];
console.log(quizQuestions);

function startQuiz() {
  console.log("startQuiz");
  startScreenEl.setAttribute("class", "hide");
  questionScreenEl.removeAttribute("class", "hide");
  currentQuestionIndex = 0;
  time = 60;
  getQuestion();
  startTimer();
}

startQuizBtn.addEventListener("click", startQuiz);

function getQuestion() {
  console.log("getQuestion");
  
  choicesEl.innerHTML = "";
  var quizObj = quizQuestions[currentQuestionIndex];
  console.log("==== Question #", currentQuestionIndex + 1, "======");
  console.log(quizObj);
  questionTextEl.textContent = quizObj.question;

  console.log(quizObj);
  questionTextEl.textContent = quizObj.question;

  for (var i = 0; i < quizObj.choices.length; i++) {
    var btnEl = document.createElement("button");
    //creating a DOM element assigned to p
    btnEl.textContent = quizObj.choices[i];
    //create the element for the ordered list
    var liEl = document.createElement("li");
    //attach the button to the list
    liEl.appendChild(btnEl);
    choicesEl.append(liEl);
    //attach the element to the id:btnEl
  } 
}

function handleChoiceBtn(event) {
    var btnClickedEl = event.target;
    console.log(btnClickedEl);
    var quizObj = quizQuestions[currentQuestionIndex];
    console.log(btnClickedEl.textContent);
    console.log(quizObj);
    console.log(quizObj.answer);
    if (quizObj.answer === btnClickedEl.textContent){
        wins++; 
        console.log(wins);
    } else {
      losses++;
      time = time-10;
      timeEl.textContent = time;
      console.log("losses", losses);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex >= quizQuestions.length) {
      scoreSummary();
    } else {
    getQuestion();
  }
}
function scoreSummary () {
  clearInterval(counter);
  console.log("Game Over!");
  questionScreenEl.setAttribute("class", "hide");
  endScreen.removeAttribute("class", "hide");
} 

function startTimer() {
  counter = setInterval(function() {
    time--;
    timeEl.textContent = time;
    if (time<=0) {
      scoreSummary();
    }
  },1000) 
}

document.getElementById('choices').addEventListener("click", handleChoiceBtn);
submit.addEventListener("click", saveScore);

function saveScore () {
  var initials = initialsEl.value
  console.log(initials, time);
  var score = `${initials} : ${time}`;
  localStorage.setItem("Score", score);
  displayHighScore();
}

highScoreBtn.addEventListener("click", displayHighScore);

function displayHighScore () {
  endScreen.setAttribute("class", "hide");
  highScoreEl.removeAttribute("class", "hide");
  var highScore = localStorage.getItem("Score");
  highScorePEl.textContent = highScore;
  
}

restartBtnEl.addEventListener("click", startQuiz);