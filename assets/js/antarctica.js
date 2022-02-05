//start section
const startBtn = document.getElementById("start-btn")
const startPage = document.getElementById("start-page")

//rules section
const rulesPage = document.getElementsByClassName("quiz-rules")
const beginBtn = document.getElementsByClassName("begin-btn")

//questions section
const questions = document.getElementById("quiz-section")
const questionTitle = document.getElementById("antarctica-questions")
const nextBtn = document.getElementById("next-btn")
const choiceBtn = document.getElementById("antarctica-answers")
const choice = Array.from(document.querySelectorAll(".choice"))
const choiceDiv = document.getElementsByClassName("choice-button")

let score = 0;
let count = 0;
let moreQuestions = [];
let nextQuestion = {};
let maximumQuestions = 10;
let randomQuestion;

let antarcticaQuestions = [
    {
        question: "Which of these animals do you NOT get in Antarctica?",
        a: "Penguins" ,
        b: "Whales" ,
        c: "Polar bears" ,
        d: "Seals",
        
        correctAnswer: "c"

    },
    {
        question: "When did humans first SEE Antarctica?",
         
            a: "500 B.C" ,
            b: "1000 A.D" ,
            c: "1520 A.D" ,
            d: "1820 A.D",
        correctAnswer : "d"
    },
    {
         question: "All mammals in Antarctica have..",
            a: "fur",
            b: "blubber",
            c: "fins" ,
            d: "teeth" ,
        
         correctAnswer : "b"
    },
    {
        question: "Antarctica is referred to as..",
 
         a: "The frozen Desert" ,
         b: "Research Haven" ,
         c: "The Titanic" ,
         d: "The iceberg" ,
        
    correctAnswer: "a"
},
{
    question: "Antarctica is in the..",

    a: "Arctic Circle",
    b: "South Pole",
    c: "North Pole",
    d: "Northern Hemisphere",
    
    correctAnswer: "b"
},
{
    question: "How much of the Earths fresh water is found in Antarctica?",

        a: "50%" ,
        b: "20%" ,
        c: "70%",
        d: "100%",
        
   correctAnswer: "70%"
},
{
    question: "Who are the only people to LIVE in Antarctica (on a temporary basis)?",

        a: "Children",
        b: "Soldiers",
        c: "Researchers",
        d: "Politicians",

    correctAnswer:"c"
},
{
    question: "Which continent is Antarctica closest to?",
     
         a: "North America" ,
       b: "Asia" ,
        c: "Australia" ,
         d: "Europe" ,
    
    correctAnswer: "c"
},
{
    question: "The world's longest glacier is found on Antarctica. What is it called?",
    
        a: "Amundsen" ,
        b: "Lambert" ,
       c: "Beardmore" ,
        d: "Scott" ,
    
    correctAnswer: "b"
},
{
  question: "What research base is located at the South Pole?",
   
      a:"Vostok Research Base" ,
      b:"Casey Research Base" ,
      c:"Molodezhnaya Research Base" ,
      d:"Amundsen-Scott Research Base" ,
    
  correctAnswer:"d"
}
]


// start button
startBtn.addEventListener('click', quizStart)

// next button
nextBtn.addEventListener('click', nextButton)



function quizStart() {
startBtn.classList.add('hide')
startPage.classList.add('hide')
questions.classList.remove('hide')
beginQuiz();
}


function beginQuiz() {

score = 0;
count = 0;
randomQuestion = 0;
moreQuestions = [...antarcticaQuestions]
getQuestion()
}

function getQuestion() {

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

    console.log(e.target)
}

function nextButton(){
    randomQuestion++;

    getQuestion(randomQuestion)
   
}

