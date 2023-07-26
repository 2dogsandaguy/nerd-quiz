const start = document.querySelector(".start");

var questionsElement = document.getElementById("questions-show");

var selectChoiceElement = document.getElementById("select-choice");

var choiceButtons = document.querySelectorAll(".btn");

var timerElement = document.querySelector(".timer-count");

var fillerEl = document.querySelector(".win_loss")
//var carouselEl = document.getElementById("carousel")

var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var winCounter = 0;
var loseCounter = 0;

let questions = [
    {
        title: 'where was the first ever comic con held on record ? ',
        answers: [
             'New York city',
            'seattle',
            'sandigio',
            '900'] ,
        correctAnnswer: "New York city"
        
    },   
    {
        title: 'what is biggest comic con ? ',
        answers: [
             'kill van kull',
            'seattle',
            'sandigio',
            '900'] ,
            correctAnnswer: "sandigio"
        
    }, 
    {
        title: 'where does it rain all the time ? ',
        answers: [
             'New York city',
            'seattle',
            'poop',
            '900'] ,
        correctAnnswer: "seattle"
        
    },
    {
        title: 'where does it rain all the time ? ',
        answers: [
             'New York city',
            'seattle',
            'poop',
            '900'] ,
        correctAnnswer: "seattle"
        
    },
    {
        title: 'where does it rain all the time ? ',
        answers: [
             'New York city',
            'seattle',
            'poop',
            '900'] ,
        correctAnnswer: "seattle"
        
    },
]
 var index = 0;


 $(".btn").each( function () {
   // var btn = event.target;
   $(this).on("click", function(event){
    checkAnwsers(event)
    index++
    showQuestions()
   })
  // if (btn.classList.includes("next")) {
   // carousel.next
   //}
    //if (btn.hasClass("next")) {
     //   carousel.next();

    //}

    
});

 var timecount = 60;
const timerDisplay = () => {
   var countdown = setInterval(() => {
        timecount--;
        timerElement.innerHTML = timecount;
       // if (timecount <= 0) {

       // }
       
        if (timecount <= 0){
            clearInterval(countdown);
            endGameHide()
        }  
       
            

        
    }, 1000);
}

function checkAnwsers(event){
console.log(event)
if (event.target.textContent == questions[index].correctAnnswer){
    winCounter++;
    win.textContent = winCounter;

}
else {
    loseCounter++
    lose.textContent = loseCounter;
    timecount = timecount -5;
}  
 if (timerElement === 0) {
    endGameHide()
    
 }
}


function startQuiz() { 
    var element = document.getElementById("hidden");
    element.classList.add("secshow");
    start.style.display = "none";
    showQuestions();
    timerDisplay();
    console.log(startQuiz);
}
function getQuestion() {
    

}
function showQuestions(){
   // var titleEl = document.getElementById('title');
     // titleEl.textContent = questions.title;
    
    questionsElement.textContent = questions[index].title;
     
    let choice = document.querySelectorAll('.btn');
    choice.forEach(function(element, i){
     element.textContent = questions[index].answers[i]
     });
     
}
var wrapperEl = document.querySelector(".wrapper")
function endGameHide (){
    if 
    (timecount <= 0)
     wrapperEl.textContent = "GAME OVER LOSER";

}
function questionsAnswered (){
    if
    lastIndexOf.questions = 
}

function ChoiceQuestions(){

//selectChoiceElement.textContent = questions[0].answers;
    //answers = questions.question.answers
    //answers = choiceButtons
    // for(var i = 0; i < questions.answers.lenght; i++) {
      //  choiceButtons.textContent = questions.answers[i].Text; 
   //  }

}