//start section
const startBtn = document.getElementById("start-btn")
const startPage = document.getElementById("start-page")

//rules section
const rulesPage = document.getElementsByClassName("quiz-rules")
const beginBtn = document.getElementsByClassName("begin-btn")

//questions section
const questionCount = document.getElementById("counter")
const questions = document.getElementById("quiz-section")
const questionTitle = document.getElementById("antarctica-questions")
const nextBtn = document.getElementById("next-btn")
const choiceBtn = document.getElementById("antarctica-answers")
const choice = Array.from(document.querySelectorAll(".choice"))
const choiceDiv = document.getElementsByClassName("choice-button")
const userScore = document.getElementById("user-score")


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
        
   correctAnswer: "c"
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

//result button
resultBtn.addEventListener('click', finalResult)

//reset button
resetBtn.addEventListener('click', quizStart)

//exit button
exitBtn.addEventListener('click', returnHome)

function quizStart() {
startBtn.classList.add('hide')
startPage.classList.add('hide')
questions.classList.remove('hide')
resultBtn.classList.add('hide')
nextBtn.classList.remove('hide')
resultSection.classList.add('hide')
userScore.innerText = 0;
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

        count++;
        questionCount.innerText = count;

        if (count >= 10) {
            nextBtn.classList.add('hide')
            resultBtn.classList.remove('hide')
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
    


    const result = userAnswer == nextQuestion.correctAnswer ? "correct" : "incorrect";
    selectedOption.parentElement.classList.add(result);

    if (result === 'correct') {
        increaseScore();
    }

    clearResult();

}


function increaseScore() {
score++;

userScore.innerText= score;

}
function clearResult() {
    selectedOption.parentElement.classList.remove(
        
    );
  
}

function nextButton(){
    randomQuestion++;

    getQuestion(randomQuestion)
   
}

function finalResult(){ 
resultSection.classList.remove('hide')
questions.classList.add('hide')
yourScore.innerText = score

}

function returnHome(){
    location.href = "index.html"
}