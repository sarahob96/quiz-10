//start section
const startBtn = document.getElementById("start-btn-hp");
const startPage = document.getElementById("start-page-hp");

//rules section
const rulesPage = document.getElementById("quiz-rules-hp");
const beginBtn = document.getElementById("begin-hp");

//questions section
const questionCount = document.getElementById("counter-hp");
const questions = document.getElementById("quiz-section-hp");
const questionTitle = document.getElementById("harry-questions");
const nextBtn = document.getElementById("next-btn-hp");
const choice = Array.from(document.querySelectorAll(".choice"));
const userScore = document.getElementById("user-score-hp");
const choice1 = document.getElementById('choice-1');
const choice2 = document.getElementById('choice-2');
const choice3 = document.getElementById('choice-3');
const choice4 = document.getElementById('choice-4');
const correctOption = document.getElementById('correct-option');
const correctOptionContainer = document.getElementById('correct-option-container');


//results section

const resultBtn = document.getElementById("result-btn-hp");
const resultSection = document.getElementById("results-container-hp");
const resetBtn = document.getElementById("reset-hp");
const exitBtn = document.getElementById('exit-hp');
const yourScore = document.getElementById('your-score-hp');
const scoreMessage = document.getElementById('score-message-hp');


let score = 0;
let count = 0;
let moreQuestions = [];
let nextQuestion = {};
let randomQuestion;
let answerChosen = false;

// questions array

let harryPotterQuestions = [{
        question: "Harrys uncle and aunt, the Dursleys, live at what address?",
        a: "Number 4, Privet Drive",
        b: "Nine and three-quarters",
        c: "The trolls club",
        d: "Gringotts",

        correctAnswer: "a"
    },
    {
        question: "Harry has a scar on his forehead. What shape is it?",
        a: "An egg",
        b: "A lightning bolt",
        c: "A pigs tail",
        d: "A shining star",
        correctAnswer: "b"

    },
    {
        question: "Hermiones Parents are not wizards. What non-wizard job do they do?",
        a: "Physician",
        b: "Tailor",
        c: "Dentist",
        d: "Mechanic",
        correctAnswer: "c"

    },
    {
        question: "How do the Dursleys say that Harrys parents died?",
        a: "In a car crash",
        b: "In an aeroplane crash",
        c: "Illness",
        d: "Heart attack",
        correctAnswer: "a"
    },
    {
        question: "What age was Voldemort when he opened the chamber of secrets?",
        a: "15 years",
        b: "16 years",
        c: "17 years",
        d: "18 years",
        correctAnswer: "b"
    },
    {
        question: "On a Quidditch pitch, how many goal posts are there in total?",
        a: "Four",
        b: "Five",
        c: "Six",
        d: "Seven",
        correctAnswer: "c"
    },
    {
        question: "What does Hagrid name his baby dragon?",
        a: "Fluffy",
        b: "Hedwig",
        c: "Baby dragon",
        d: "Norbert",
        correctAnswer: "d"
    },
    {
        question: "What is the term for non-magical people?",
        a: "Dentists",
        b: "Muggles",
        c: "Wizards",
        d: "Hogwarts",
        correctAnswer: "b"
    },
    {
        question: "Which is not among the four position on a Quidditch team?",
        a: "Chaser",
        b: "Seeker",
        c: "Keeper",
        d: "Goalkeeper",
        correctAnswer: "d"
    },
    {
        question: "Which spell can levitate objects?",
        a: "Wand",
        b: "Petrificius Totalu",
        c: "Alohomora",
        d: "Wingardium Leviosa",
        correctAnswer: "d"
    }
];
// start button
startBtn.addEventListener('click', quizStart);

//begin button
beginBtn.addEventListener('click', beginQuiz);

// next button
nextBtn.addEventListener('click', nextButton);

//result button
resultBtn.addEventListener('click', finalResult);

//reset button
resetBtn.addEventListener('click', quizStart);

//exit button
exitBtn.addEventListener('click', returnHome);

// resets the quiz, ensuring no answers are kept from previous


function quizStart() {
    startBtn.classList.add('hide');
    startPage.classList.add('hide');
    questions.classList.add('hide');
    resultBtn.classList.add('hide');
    nextBtn.classList.add('hide');
    rulesPage.classList.remove('hide');
    resultSection.classList.add('hide');
    userScore.innerText = 0;


    choice1.classList.remove('incorrect');
    choice2.classList.remove('incorrect');
    choice3.classList.remove('incorrect');
    choice4.classList.remove('incorrect');
    choice1.classList.remove('correct');
    choice2.classList.remove('correct');
    choice3.classList.remove('correct');
    choice4.classList.remove('correct');

}
// hides the rules page, resets variables and shows the question/answers element


function beginQuiz() {

    rulesPage.classList.add('hide');
    questions.classList.remove('hide');

    score = 0;
    count = 0;
    randomQuestion = 0;
    moreQuestions = [...harryPotterQuestions];
    getQuestion();
}

// obtains a random question from the question array and displays the question to the user

function getQuestion() {

    nextBtn.classList.add('hide');
    count++;
    questionCount.innerText = count;

    if (count >= 10) {
        nextBtn.classList.add('hide');
    }

    randomQuestion = Math.floor(Math.random() * moreQuestions.length);
    nextQuestion = moreQuestions[randomQuestion];
    questionTitle.innerText = nextQuestion.question;

    // splices the question given so it will not repeat

    moreQuestions.splice(randomQuestion, 1);

    // variable which allows user to choose answer

    answerChosen = true;

    // displays the answers as choices, using the dataset attribute
// registers the user clicking answer

    choice.forEach(function (answer) {
        const answerBtn = answer.dataset.option;
        answer.innerText = nextQuestion[answerBtn];
        answer.addEventListener('click', answerSelection);

    });

}

//when an answer is selected, variable turns to false. User can no longer select another answer
// checks to see if user's answer is correct or incorrect

function answerSelection(e) {

    if (answerChosen === false) return;

    answerChosen = false;

    //code adapted from Web Dev Simplified

    const selectedOption = e.target;
    const userAnswer = selectedOption.dataset.option;

   // checks to see if the users answer is correct/incorrect
 
    const result = userAnswer == nextQuestion.correctAnswer ? "correct" : "incorrect";
    selectedOption.parentElement.classList.add(result);


    if (result === 'correct') {
        increaseScore();
    }
     else {
            correctOption.innerText = nextQuestion.correctAnswer;
            correctOptionContainer.classList.remove('hide');
        }
    

// when 10 Questions have displayed, show the result button

    nextBtn.classList.remove('hide');

    if (count >= 10) {
        nextBtn.classList.add('hide');
        resultBtn.classList.remove('hide');
    }
}

// increments the users score by 1

function increaseScore() {
    score++;

    userScore.innerText = score;

}


function nextButton() {

    randomQuestion++;

    correctOptionContainer.classList.add('hide');

    getQuestion(randomQuestion);

    //removes correct/incorrect class once next button is clicked


    choice1.classList.remove('incorrect');
    choice2.classList.remove('incorrect');
    choice3.classList.remove('incorrect');
    choice4.classList.remove('incorrect');
    choice1.classList.remove('correct');
    choice2.classList.remove('correct');
    choice3.classList.remove('correct');
    choice4.classList.remove('correct');
}

// shows the result page and users score

function finalResult() {
    resultSection.classList.remove('hide');
    questions.classList.add('hide');
    yourScore.innerText = score;

//displays message depending on score value

    if (score <= 10) {
        scoreMessage.innerText = ` You're a WIZARD!`;
    }
    if (score <= 8) {
        scoreMessage.innerText = ` Nearly as smart as Hermione.... `;

        if (score <= 6) {
            scoreMessage.innerText = ` Not quite Gryfinndor standards`;
        }
    }
    if (score <= 3) {
        scoreMessage.innertext = `You must be a muggle.... try again!`;
    }

}
// returns user to the main page

function returnHome() {
    location.href = "index.html";
}