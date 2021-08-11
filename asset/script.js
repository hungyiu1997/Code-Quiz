var startscreen = document.getElementById("startscreen");
var startquizBtn = document.getElementById("startquiz");
var questionscreen = document.getElementById("questionscreen");
var questiontext = document.getElementById("questiontext");
var choicesEl = document.getElementById("choices");
var endscreen = document.getElementById("endscreen");
var endscore = document.getElementById("endscore");
var initals = document.getElementById("initials");
var submit = document.getElementById("submit");
var timeEl = document.getElementById("time");
var timerId;
var currentQuestionIndex = 0;

var questions = [
    {
        question:"",
        choices:["Answers1", "2"],
        answer:"answers"
    },
    {
        question:"Fill in question",
        choices:["Answers1", "2"],
        answer:"answers"
    },
];


function startquiz(){
    //hide our startscreen
    startscreen.setAttribute("class", "hide");
    //show our question screen
    questionscreen.removeAttribute("class", "hide");
    //start timer
    timeId = setInterval(timer,1000)
    timeEl.textContent= time 
    //call the next function
    getQuestion();
}

function getQuestion() {
    //set variable for ucrrent question
// add question to the page
//add the choices to the pages as buttons
//use .forEach method here
//append to the page



}

//user question click function
    //check for right answer
    //subtract time for wrong answer
    //tell them if they're right or wrong

    //move on to next question


//end quiz function
        //similar to start quiz

 //timer function
    //set the time
    //watch for timer to get below 0

//highscore functions
startquizBtn.addEventListener("click", startquiz);