const start = document.querySelector(".start")

var questionsElement = document.getElementById("questions-show")

var selectChoiceElement = document.getElementById("select-choice")

var choiceButtons = document.getElementById(".btn")

let questions = [
    {
        title: 'where was the first ever comic con held on record ? ',
        answers: [
             'New York city',
            'seattle',
            'sandigio',
            '900'] ,
            correctAnnswer: 0
        
    },   {
        title: 'where was the first ever comic con held on record ? ',
        answers: [
             'New York city',
            'seattle',
            'sandigio',
            '900'] ,
            correctAnnswer: 0
        
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
    questionsElement.textContent = questions[0].title;
     
     let choice = document.querySelectorAll('.btn');
     console.log(choice);
    choice.forEach(function(element, index){
     element.textContent = "huge cock"
     });
     console.log(showQuestions);
}
function showChoices(){
//selectChoiceElement.textContent = questions[0].answers;
    //answers = questions.question.answers
    //answers = choiceButtons
    // for(var i = 0; i < questions.answers.lenght; i++) {
      //  choiceButtons.textContent = questions.answers[i].Text; 
   //  }

}