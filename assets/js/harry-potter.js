//start section
const startBtn = document.getElementById("start-btn")
const startPage = document.getElementById("start-page")

//rules section
const rulesPage = document.getElementById("quiz-rules")
const beginBtn = document.getElementById("begin")

//questions section
const questionCount = document.getElementById("counter")
const questions = document.getElementById("quiz-section")
const questionTitle = document.getElementById("antarctica-questions")
const nextBtn = document.getElementById("next-btn")
const choiceBtn = document.getElementById("antarctica-answers")
const choice = Array.from(document.querySelectorAll(".choice"))
const choiceDiv = document.getElementsByClassName("choice-button")
const userScore = document.getElementById("user-score")
const choice1 = document.getElementById('choice1')
const choice2 = document.getElementById('choice2')
const choice3 = document.getElementById('choice3')
const choice4 = document.getElementById('choice4')

//results section

const resultBtn = document.getElementById("result-btn")
const resultSection = document.getElementById("results-container")
const resetBtn = document.getElementById("reset")
const exitBtn = document.getElementById('exit')
const yourScore = document.getElementById('your-score')



let score = 0;
let count = 0;
let moreQuestions = [];
let nextQuestion = {};
let maximumQuestions = 10;
let randomQuestion;

let harryPotterQuestions = [
    {
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
        b:"Petrificius Totalu",
        c: "Alohomora",
        d: "Wingardium Leviosa",
        correctAnswer: "d"
    }
    ]
// start button
startBtn.addEventListener('click', quizStart) 

//begin button
beginBtn.addEventListener('click', beginQuiz)

// next button
nextBtn.addEventListener('click', nextButton)

//result button
resultBtn.addEventListener('click', finalResult)

//reset button
resetBtn.addEventListener('click', quizStart)

//exit button
exitBtn.addEventListener('click', returnHome)

function quizStart() {
startBtn.classList.add('hide')
startPage.classList.add('hide')
questions.classList.add('hide')
resultBtn.classList.add('hide')
nextBtn.classList.add('hide')
rulesPage.classList.remove('hide')
resultSection.classList.add('hide')
userScore.innerText = 0;

}


function beginQuiz() {

rulesPage.classList.add('hide')
questions.classList.remove('hide')

score = 0;
count = 0;
randomQuestion = 0;
moreQuestions = [...antarcticaQuestions]
getQuestion()
}

function getQuestion() {

        nextBtn.classList.add('hide')
        count++;
        questionCount.innerText = count;

        if (count >= 10) {
            nextBtn.classList.add('hide')
        }

        randomQuestion = Math.floor(Math.random() * moreQuestions.length)
        nextQuestion = moreQuestions[randomQuestion]
        questionTitle.innerText= nextQuestion.question;

        moreQuestions.splice(randomQuestion, 1);

        choice.forEach(function (answer) { 
            const answerBtn = answer.dataset.option;
            answer.innerText = nextQuestion[answerBtn]
        })
         choice.forEach(answer => {
             answer.addEventListener('click', answerSelection)
         })
         }
        

function answerSelection(e) {

    const selectedOption = e.target;
    const userAnswer = selectedOption.dataset.option;
    

//code adapted from 
    const result = userAnswer == nextQuestion.correctAnswer ? "correct" : "incorrect";
    selectedOption.parentElement.classList.add(result);
    
    

    if (result === 'correct') {
        increaseScore();
    }
     nextBtn.classList.remove('hide')
     if (count >=10){
         nextBtn.classList.add('hide')
         resultBtn.classList.remove('hide')
     }

} 


function increaseScore() {
score++;

userScore.innerText= score;

}


function nextButton(){

    randomQuestion++;

    getQuestion(randomQuestion)
   
    choice1.classList.remove('incorrect')
    choice2.classList.remove('incorrect')
    choice3.classList.remove('incorrect')
    choice4.classList.remove('incorrect')
    choice1.classList.remove('correct')
    choice2.classList.remove('correct')
    choice3.classList.remove('correct')
    choice4.classList.remove('correct')
}


function finalResult(){ 
resultSection.classList.remove('hide')
questions.classList.add('hide')
yourScore.innerText = score

}

function returnHome(){
    location.href = "index.html"
}

