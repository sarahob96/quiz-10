//start section
const startBtn = document.getElementsByClassName("start-btn");
const startPage = document.getElementsByClassName("start-page");

//rules section
const rulesPage = document.getElementsByClassName("quiz-rules");
const beginBtn = document.getElementsByClassName("begin-btn");

//questions section
const questions = document.getElementsByClassName("quiz-section");


let score = 0;
let moreQuestions = [];
let count = 0;
let currentQuestion = {};
let maximumQuestions = 10;

let antarcticaQuestions=[
    {
        question: "Which of these animals do you NOT get in Antarctica?",
        answers:{ 
            a:"Penguins",
            b:"Whales",
            c:"Polar bears",
            d:"Seals"
        },
        correctAnswer: "c"
    },
    {
        question: "When did humans first SEE Antarctica?",
        answers:{
            a: "500 B.C",
            b: "1000 A.D",
            c: "1520 A.D",
            d: "1820 A.D"
        },
        correctAnswer: "d"
    },
    {
         question: "All mammals in Antarctica have..",
         answers:{
             a: "fur",
             b: "blubber",
             c: "fins",
             d: "teeth"
         },
         correctAnswer: "b"
    },
    {
        question: "Antarctica is referred to as..",
        answers:{
        a: "The frozen Desert",
        b: "Research Haven",
        c: "The Titanic",
        d: "The iceberg"
    },
    correctAnswer: "a"
},
{
    question: "Antarctica is in the..",
    answers:{
        a: "Arctic Circle",
        b: "South Pole",
        c: "North Pole",
        d: "Northern Hemisphere"
    },
    correctAnswer: "b"
},
{
    question: "How much of the Earths fresh water is found in Antarctica?",
    answers:{
        a: "50%",
        b: "20%",
        c: "70%",
        d: "100%"
    },
   correctAnswer:"70%"
},
{
    question: "Who are the only people to LIVE in Antarctica (on a temporary basis)?",
    answers:{
        a: "Children",
        b: "Soldiers",
        c: "Researchers",
        d: "Politicians"
    },
    correctAnswer:"c"
},
{
    question: "Which continent is Antarctica closest to?",
    answers:{
        a: "North America",
        b: "Asia",
        c: "Australia",
        d: "Europe"
    },
    correctAnswer:"c"
},
{
    question: "The world's longest glacier is found on Antarctica. What is it called?",
    answers:{
        a: "Amundsen",
        b: "Lambert",
        c: "Beardmore",
        d: "Scott"
    },
    correctAnswer:"b"
},
{
  question: "What research base is located at the South Pole?",
  answers:{
      a:"Vostok Research Base",
      b:"Casey Research Base",
      c:"Molodezhnaya Research Base",
      d:"Amundsen-Scott Research Base"
  },
  correctAnswers:"d"
}
]

// start button
startBtn.addEventListener('click', quizStart)

function quizStart() {
startBtn.classList.add('hide')
questions.classList.remove('hide')
}


beginQuiz= () =>
score=0;
count=0;
moreQuestions=[...antarcticaQuestions];


function getQuestion(){
    count++;
    if (moreQuestions.length === 0 || count >= maximumQuestions) {

    }
}
