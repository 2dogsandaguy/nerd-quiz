const start = document.querySelector(".start")
var questionsElement = document.getElementById("#questions-show")
const selectChoiceElement = document.getElementById("answers")

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
    console.log(startQuiz)
}
function getQuestion() {
    

}
function showQuestions(){
    questionsElement.textContent = questions;
console.log(showQuestions);
}