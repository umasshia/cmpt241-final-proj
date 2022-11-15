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
        question : "What is this TV show?",
        imgSrc : "tvimg/1.jpg",
        choiceA : "Better Call Saul",
        choiceB : "Twin Peaks",
        choiceC : "The Sopranos",
		choiceD : "Breaking Bad",
        correct : "D"
    },{
        question : "What is this TV show?",
        imgSrc : "tvimg/2.jpg",
        choiceA : "Stranger Things",
        choiceB : "Adventure Time",
        choiceC : "Supernatural",
		choiceD : "Yellowstone",
        correct : "A"
    },{
        question : "What is this TV show?",
        imgSrc : "tvimg/3.jpg",
        choiceA : "Lost",
        choiceB : "Fargo",
        choiceC : "Dark",
		choiceD : "The 100",
        correct : "C"
    },{
        question : "What is this TV show?",
        imgSrc : "tvimg/4.jpg",
        choiceA : "The Witcher",
        choiceB : "Westworld",
        choiceC : "Game of Thrones",
		choiceD : "Black Mirror",
        correct : "C"
    },{
        question : "What is this TV show?",
        imgSrc : "tvimg/5.jpg",
        choiceA : "Rick and Morty",
        choiceB : "Bojack Horseman",
        choiceC : "Ozark",
		choiceD : "Love, Death & Robots",
        correct : "B"
    },{
        question : "What is this TV show?",
        imgSrc : "tvimg/6.jpg",
        choiceA : "American Horror Story",
        choiceB : "The Walking Dead",
        choiceC : "Dexter",
		choiceD : "Homeland",
        correct : "B"
    },{
        question : "What is this TV show?",
        imgSrc : "tvimg/7.jpg",
        choiceA : "Schitt's Creek",
        choiceB : "The Big Bang Theory",
        choiceC : "The Office",
		choiceD : "Community",
        correct : "C"
    },{
        question : "What is this TV show?",
        imgSrc : "tvimg/8.jpg",
        choiceA : "The Mandalorian",
        choiceB : "Attack on Titan",
        choiceC : "The Boys",
		choiceD : "The Blacklist",
        correct : "A"
    },{
        question : "What is this TV show?",
        imgSrc : "tvimg/9.jpg",
        choiceA : "This Is Us",
        choiceB : "Modern Family",
        choiceC : "How I Met Your Mother",
		choiceD : "Friends",
        correct : "D"
    },{
        question : "What is this TV show?",
        imgSrc : "tvimg/10.jpg",
        choiceA : "Vikings",
        choiceB : "Dexter",
        choiceC : "The Wire",
		choiceD : "Bones",
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



