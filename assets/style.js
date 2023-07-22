const questions =[
    {
        questions:"How old am I",
        answers: [
             {text:"29", correct: false},
             {text:"30", correct: false},
             {text:"33", correct: true},
             {text:"37", correct: false}
        ]
    },
    {
        questions:"am i a good web designer",
        answers: [
             {text:"no", correct: false},
             {text:"maybe", correct: false},
             {text:"yes", correct: true},
             {text:"not there yet", correct: false}
        ]
    },
];
const questionElement = document.getElementById("questions");
const selectchoice = document.getElementById("select-choice");
const startButton = document.getElementById("start-quiz");
startButton.addEventListener("click" , startQuiz);

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    //questionElement.textContent=questions[0].questions
    showQuestions();
}

function showQuestions(){
    resetstate();
    let currentQuestions = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestions.
    questions;

    currentQuestions.answers.forEach( answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        selectchoice.appendChild(button);

    })
}

function resetstate(){
    
}