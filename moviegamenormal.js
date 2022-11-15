const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const img = document.getElementById("img");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
const passScore = document.getElementById("score");

let questions = [
    {
        question : "What is this movie?",
        imgSrc : "movieimg/1.jpg",
        choiceA : "Oblivion",
        choiceB : "Extinction",
        choiceC : "Alien",
		choiceD : "Cloverfield",
        correct : "C"
    },{
        question : "What is this movie?",
        imgSrc : "movieimg/2.jpg",
        choiceA : "The Time Machine",
        choiceB : "Back to the Future",
        choiceC : "Close Encounters",
		choiceD : "Jurassic Park",
        correct : "B"
    },{
        question : "What is this movie?",
        imgSrc : "movieimg/3.jpg",
        choiceA : "Super 8",
        choiceB : "Ghost in the Shell",
        choiceC : "Edge of Tomorrow",
		choiceD : "Blade Runner",
        correct : "D"
    },{
        question : "What is this movie?",
        imgSrc : "movieimg/4.jpg",
        choiceA : "Pineapple Express",
        choiceB : "Snatch",
        choiceC : "Hangover",
		choiceD : "Fear and Loathing in Las Vegas",
        correct : "D"
    },{
        question : "What is this movie?",
        imgSrc : "movieimg/5.jpg",
        choiceA : "Jaws",
        choiceB : "The Shining",
        choiceC : "The Ruins",
		choiceD : "Psycho",
        correct : "A"
    },{
        question : "What is this movie?",
        imgSrc : "movieimg/6.jpg",
        choiceA : "Paranormal Activity",
        choiceB : "Hereditary",
        choiceC : "Poltergeist",
		choiceD : "Child's Play",
        correct : "C"
    },{
        question : "What is this movie?",
        imgSrc : "movieimg/7.jpg",
        choiceA : "The Usual Suspects",
        choiceB : "Jackie Brown",
        choiceC : "Pulp Fiction",
		choiceD : "Coffe and Cigarettes",
        correct : "C"
    },{
        question : "What is this movie?",
        imgSrc : "movieimg/8.jpg",
        choiceA : "Annihilation",
        choiceB : "The Thing",
        choiceC : "Green Room",
		choiceD : "The Descent",
        correct : "B"
    },{
        question : "What is this movie?",
        imgSrc : "movieimg/9.jpg",
        choiceA : "Funny People",
        choiceB : "Bruno",
        choiceC : "The Dictator",
		choiceD : "Borat",
        correct : "D"
    },{
        question : "What is this movie?",
        imgSrc : "movieimg/10.jpg",
        choiceA : "Candyman",
        choiceB : "A Nightmare on Elm Street",
        choiceC : "Friday the 13th",
		choiceD : "Sleepy Hollow",
        correct : "A"
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
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
	choiceD.innerHTML = q.choiceD;
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

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
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
    scoreDiv.innerHTML += "<p>"+ score +"/10</p>";
}

function updateScore() {
	passScore.value = score;
}



