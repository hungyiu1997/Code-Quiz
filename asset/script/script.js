var startScreenEl = document.getElementById("startscreen");
var startQuizBtn = document.getElementById("startquiz");
var questionScreenEl = document.getElementById("questionscreen");
var questionTextEl = document.getElementById("question-text");
var choicesEl = document.getElementById("choices");
var endScreen = document.getElementById("endscreen");
var endScore = document.getElementById("endscore");
var initals = document.getElementById("initials");
var submit = document.getElementById("submit");
var timeEl = document.getElementById("time");
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
  //hide our startscreen
  startScreenEl.setAttribute("class", "hide");
  //show our question screen
  questionScreenEl.removeAttribute("class", "hide");
  //start timer
  // timeId = setInterval(timer,10000)
  // timeEl.textContent= time
  //call the next function
  getNextQuestion();
  
}

startQuizBtn.addEventListener("click", startQuiz);


function getNextQuestion () {
    for (var i = 0; i < quizQuestions.length; i++) {
        questionScreenEl.textContent = ""
        // getQuestion();
        // currentQuestionIndex++;
    }
}

function getQuestion() {
  //console.log the name
  console.log("getQuestion");
  // set variable for current question
  var quizObj = quizQuestions[currentQuestionIndex];
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

//get

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
    }
}

document.addEventListener("click", handleChoiceBtn);
// add question to the page

//add the choices to the pages as buttons
// quizQuestions.forEach(choices);
//use .forEach method here
//append to the page
//     document.append(questionScreen);

//user question click function
// function answerQuestion() {
// if (quizQuestions.choices === quizQuestions.answer);
// console.log("You're correct")
// } else if (quizQuestions.choices !=== quizQuestions.answer);
// console.log("You're Wrong")
// };
//check for right answer
//tell them if they're right or wrong

//move on to next question

//end quiz function
//similar to start quiz
// function endQuiz(){
// endScreen.setAttribute("class", "hide");
// questionScreen.removeAttribute("class", "hide");

// }

// function setTime() {
// if(secondsLeft === 0) {
//         clearInterval(timeId);

//     }
// }
//timer function
//set the time
//watch for timer to get below 0

//highscore functions
