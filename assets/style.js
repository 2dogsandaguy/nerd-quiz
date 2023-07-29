const start = document.querySelector(".start");
var questionsElement = document.getElementById("questions-show");
var selectChoiceElement = document.getElementById("select-choice");
var choiceButtons = document.querySelectorAll(".btn");
var timerEnd = document.getElementById("timer-end");
var timerElement = document.querySelector(".timer-count");
var logScore = document.querySelector(".win_loss");
var finalStep = document.getElementById("final_step");
var userName = document.querySelector("#user-name");
var finalEl = document.querySelector(".final_score");
var outerWrapper = document.getElementById("outer-wrapper");
var wrapperEl = document.querySelector(".wrapper");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var hideButton = document.getElementById("hide-button");
var startInfo = document. getElementById("info-sec")
var playerScore = { playerName: "", timecount: 60 };
var getScores = [];
var currentQuestionindex = 0;
var winCounter = 0;
var loseCounter = 0;
var timecount = 60;
var index = 0;
var countdown;

let questions = [
    {
        title: 'What is a string? ',
        answers: [
            'An object that represents a number of character values.',
            'True or false value.',
            'A fuction.',
            'All the above.'],
        correctAnswer: "An object that represents a number of character values."

    },
    {
        title: 'How do you link java to html ? ',
        answers: [
            'quearySelector',
            'id ',
            'class ',
            'All the above'],
        correctAnswer: "All the above"

    },
    {
        title: 'What is a boolean ? ',
        answers: [
            'How to log out of java',
            'How to log into java',
            'One that can either be TRUE or FALSE.',
            'A list of numbers.'],
        correctAnswer: "One that can either be TRUE or FALSE."

    },
    {
        title: 'How do you get java to link to HTML? ',
        answers: [
            'Just creat another file in code.',
            'Link to bottom of body tag.',
            'Link to CSS file.',
            'There is no need to link.'],
        correctAnswer: "Link to bottom of body tag."

    },
    {
        title: ' What is global scope in javascript? ',
        answers: [
            'How to consol log.',
            'is the context where everything in a Javascript program executes by default.',
            'Variables that are declared inside a function are called local variables and in the function scope.',
            'It links images to java.'],
        correctAnswer: "is the context where everything in a Javascript program executes by default."
    },
]
function startQuiz() {
    var element = document.getElementById("hidden");
    element.classList.add("secshow");
    start.style.display = "none";
    startInfo.style.display= "none";
    showQuestions();
    timerDisplay();
    completeEl();
};

const timerDisplay = () => {
    countdown = setInterval(() => {
        timecount--;
        timerElement.innerHTML = timecount;
        if (timecount <= 0) {
            clearInterval(countdown);
            endGameHide();
        }

    }, 1000);
};

$(".btn").each(function () {
    $(this).on("click", function (event) {
        checkAnwsers(event);
        index++
        if (index === questions.length) {
            clearInterval(countdown);
            completeEl();
        }
        else {
            showQuestions();
        }
    })
});

function showQuestions() {
    questionsElement.textContent = questions[index].title;

    let choice = document.querySelectorAll('.btn');
    choice.forEach(function (element, i) {
        element.textContent = questions[index].answers[i]
    })
};
function checkAnwsers(event) {
    if (event.target.textContent === questions[index].correctAnswer) {
        winCounter++;
        win.textContent = winCounter;
    }
    else {
        loseCounter++
        lose.textContent = loseCounter;
        timecount = timecount - 5;
    }
};
function endGameHide() {
    if
        (timecount <= 0)
        wrapperEl.textContent = "GAME OVER LOSER  " + `you scored ${winCounter} out of ${questions.length}!`;
};

function completeEl() {
    if (index < questions.length) {
        finalEl.style.display = "none"
    }
    else {
        (index === questions.length)
        finalEl.style.display = 'block'
        outerWrapper.textContent = "Completed OOOH YEAH   " + `Questions right ${winCounter} out of ${questions.length}!`;
    }
};

finalStep.addEventListener("click", () => {
    var storedScores = JSON.parse(localStorage.getItem("timecount"));

    if (storedScores !== null) {

        getScores = storedScores;
    }

    playerScore.playerName = userName.value;
    playerScore.timecount = timecount;
    getScores.push(playerScore);
    localStorage.setItem("timecount", JSON.stringify(getScores));
    hideButton.style.display = "none";
    renderScores();
});

var storedScores = JSON.parse(localStorage.getItem("timecount"));
function renderScores() {
    storedScores = JSON.parse(localStorage.getItem("timecount"));
    var scoresList = document.getElementById("scores-list");
    scoresList.innerHTML = "";
    storedScores.forEach(function (score) {
        var listItem = document.createElement("li");
        listItem.textContent = score.playerName + ": " + score.timecount + " seconds";
        scoresList.appendChild(listItem);
    });
};