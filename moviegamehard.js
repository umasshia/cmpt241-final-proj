const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const img = document.getElementById("img");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const passScore = document.getElementById("score");

let questions = [
    {
        question : "What is this movie?",
        imgSrc : "movieimg/1.jpg",
        correct : "alien"
    },{
        question : "What is this movie?",
        imgSrc : "movieimg/2.jpg",
        correct : "back to the future"
    },{
        question : "What is this movie?",
        imgSrc : "movieimg/3.jpg",
        correct : "blade runner"
    },{
        question : "What is this movie?",
        imgSrc : "movieimg/4.jpg",
        correct : "fear and loathing in las vegas"
    },{
        question : "What is this movie?",
        imgSrc : "movieimg/5.jpg",
        correct : "jaws"
    },{
        question : "What is this movie?",
        imgSrc : "movieimg/6.jpg",
        correct : "poltergeist"
    },{
        question : "What is this movie?",
        imgSrc : "movieimg/7.jpg",
        correct : "pulp fiction"
    },{
        question : "What is this movie?",
        imgSrc : "movieimg/8.jpg",
        correct : "the thing"
    },{
        question : "What is this movie?",
        imgSrc : "movieimg/9.jpg",
        correct : "borat"
    },{
        question : "What is this movie?",
        imgSrc : "movieimg/10.jpg",
        correct : "candyman"
    }
];

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;

function renderQuestion(){
    let q = questions[runningQuestion];
    question.innerHTML = "<p>"+ q.question +"</p>";
    img.innerHTML = "<img src="+ q.imgSrc +">";
}

start.addEventListener("click",startQuiz);

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

function enterGuess() {
    var guess = document.getElementById("entry").value;
    document.getElementById("entry").value = "";
    var entry = guess.toLowerCase();
    checkAnswer(entry);
}

function checkAnswer(entry){
    if(entry == questions[runningQuestion].correct){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        scoreRender();
		updateScore();
    }
}
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

function scoreRender(){
    scoreDiv.style.display = "block";
    scoreDiv.innerHTML += "<p>"+ score*2 +"/20</p>";
}

function updateScore() {
	passScore.value = score*2;
}