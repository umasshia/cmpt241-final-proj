const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const img = document.getElementById("img");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const passScore = document.getElementById("score");

let questions = [
    {
        question : "What is this TV show?",
        imgSrc : "tvimg/1.jpg",
        correct : "breaking bad"
    },{
        question : "What is this TV show?",
        imgSrc : "tvimg/2.jpg",
        correct : "stranger things"
    },{
        question : "What is this TV show?",
        imgSrc : "tvimg/3.jpg",
        correct : "dark"
    },{
        question : "What is this TV show?",
        imgSrc : "tvimg/4.jpg",
        correct : "game of thrones"
    },{
        question : "What is this TV show?",
        imgSrc : "tvimg/5.jpg",
        correct : "bojack horseman"
    },{
        question : "What is this TV show?",
        imgSrc : "tvimg/6.jpg",
        correct : "the walking dead"
    },{
        question : "What is this TV show?",
        imgSrc : "tvimg/7.jpg",
        correct : "the office"
    },{
        question : "What is this TV show?",
        imgSrc : "tvimg/8.jpg",
        correct : "the mandalorian"
    },{
        question : "What is this TV show?",
        imgSrc : "tvimg/9.jpg",
        correct : "friends"
    },{
        question : "What is this TV show?",
        imgSrc : "tvimg/10.jpg",
        correct : "vikings"
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