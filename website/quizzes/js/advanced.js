const questions = [
    {
        question:"which has highest gravity?",
        answers:[
            
                {text: "Mars", correct: "false"},
                {text: "Earth", correct: "true"},
                {text: "Jupiter", correct: "false"},
                {text: "Saturn", correct: "false"}
            
        ]
    }, {
        question:"What is the hottest planet in our solar system?",
        answers:[
            
                {text: "Mercury", correct: "false"},
                {text: "Venus", correct: "true"},
                {text: "Mars", correct: "false"},
                {text: "Saturn", correct: "false"}
            
        ]
    }, {
        question:" What planet is famous for its big red spot on it?",
        answers:[
            
                {text: "Jupiter", correct: "false"},
                {text: "Mars", correct: "true"},
                {text: "Saturn", correct: "false"},
                {text: "Earth", correct: "false"}
            
        ]
    }, {
        question:" What is the closest planet to the Sun?",
        answers:[
                {text: "Venus", correct: "false"},
                {text: "Earth", correct: "true"},
                {text: "Mars", correct: "false"},
                {text: "Mercury", correct: "false"}
            
        ]
    }, {
        question:" What is the name of the 2nd biggest planet in our solar system?",
        answers:[
            
                {text: "Neptune", correct: "false"},
                {text: "Jupiter", correct: "true"},
                {text: "Saturn", correct: "false"},
                {text: "Pluto", correct: "false"}
            
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();  
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;


currentQuestion.answers.forEach(answer=> {
    const button = document.createElement("button");
    button.innerHTML =  answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
        button.dataset.correct = answer.correct;
    }
    button.addEventListener("click",SelectAnswer);

});
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){ 
        answerButton.removeChild(answerButton.firstChild);

    }
}
function  SelectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true ;

    });
    nextButton.style.display="block";
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

function showScore(){
    resetState();
    questionElement.innerHTML =  `You score ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display="block";
}

 function handleNextButton()
 {
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
 }
 
startQuiz();
