var startScreenEl = document.getElementById("startscreen");
var startQuizBtn = document.getElementById("startquiz");
var questionScreenEl = document.getElementById("questionscreen");
var questionTextEl = document.getElementById("questiontext");
var choicesEl = document.getElementById("choices");
var endScreenEl = document.getElementById("endscreen");
var endScoreEl = document.getElementById("endscore");
var initalsEl = document.getElementById("initials");
var submitEl = document.getElementById("submit");
var timeEl = document.getElementById("time");
var timerId;
var currentQuestionIndex = 0;

var quizQuestions = [
    {
        question:"When does a player receive a red card on pitch?",
        choices:["When a player commit a fault", "When a player receive a second yellow card", "When a player conduct an unprofessional conduct", "All of the above."],
        answer:"All of the above"
    },
    {
        question:"When is video assistant referee (VAR) used?",
        choices:["When there a clear and obvious error from the referee", "When a player commit a fault", "When there is a penalty shout", "When an on pitch player request it"],
        answer:"When there is a clear and obvious error from the referee"
    },
    {
        question:"Which one is not a current European club tournament?",
        choices:["Champions League", "Europa League", "European Conference League", "UEFA Cup"],
        answer:"UEFA Cup"
    },
    {
        question:"When was the last FIFA World Cup hosted?",
        choices:["Russia", "Germany", "Brazil", "Chlie"],
        answer:"Russian"
    },
    {
        question:"Who was the winner of the 2014 FIFA World Cup in Brazil?",
        choices:["Brazil", "Germany", "Argentina", "The Netherlands"],
        answer:["Germany"]
    },
];
console.log(quizQuestions);

function startQuiz(){
    //hide our startscreen
    startScreen.setAttribute("class", "hide");
    //show our question screen
    questionScreen.removeAttribute("class", "hide");
    //start timer
    timeId = setInterval(timer,10000)
    timeEl.textContent = secondsLeft
    //call the next function
    getQuestion();
}

startQuizBtn.addEventListener("click", startquiz);

function getQuestion() {
    //set variable for current question
    var currentQuestion(quizQuestions);
// add question to the page

//add the choices to the pages as buttons
    quizQuestions.forEach(choices);
//use .forEach method here
//append to the page
    document.append(questionScreen);
}


//user question click function
function answerQuestion() {
    if (quizQuestions.choices === quizQuestions.answer);
        console.log("You're correct")
} else if (quizQuestions.choices !=== quizQuestions.answer);
        console.log("You're Wrong")
};
    //check for right answer
    //tell them if they're right or wrong

    //move on to next question


//end quiz function
        //similar to start quiz
function endQuiz(){
    endScreen.setAttribute("class", "hide");
    
}



function setTime() {
    var timerInterval = setInterval(
        function() {
            secondsLeft--;
            timeEl.textContent = secondsLeft + " seconds left!";

            if(secondsLeft === 0) {
                clearInterval(timerInterval);
                sendMessage();
            }
        },
        1000);
}

function sendMessage() {
    timeEl.textContent= "You are out of time!"
    return;

}
setTime();
 //timer function
    //set the time
    //watch for timer to get below 0

var score = 0;
//highscore functions

    
}
