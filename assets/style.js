const start = document.querySelector(".start")
var questionsElement = document.getElementById("questions-show")
const selectChoiceElement = document.getElementById("select-choice")
var choiceButtons = document.getElementById(".btn")
let questions =[
    {
        question: 'waht is 2 + 2',
        answers: [
            {Text: '4', correct: true},
            {Text: '22', correct: false},
            {Text: '222', correct: false},
            {Text: '900', correct: false},
        ]
    },
    {
        question: 'waht is 8 + 2',
        answers: [
            {Text: '10', correct: true},
            {Text: '82', correct: false},
            {Text: '282', correct: false},
            {Text: '8+2', correct: false},
        ]
    }

]


function startQuiz() { 
    var element = document.getElementById("hidden");
    element.classList.add("secshow");
    start.style.display = "none";
    showQuestions()
    showChoices()
    console.log(startQuiz)
}
function getQuestion() {
    

}
function showQuestions(){
    questionsElement.textContent = questions[0].question;
console.log(showQuestions);
}
function showChoices(){
selectChoiceElement.textContent = questions[0].answers;
     for(var i = 0; i < answers.lenght; i++) {
        selectChoiceElement.textContent = answers[i]
     }

}