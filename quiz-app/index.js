let questionEl=document.getElementById('question-el')
let aText=document.getElementById('a-text')
let bText=document.getElementById('b-text')
let cText=document.getElementById('c-text')
let dText=document.getElementById('d-text')
let subBtn=document.getElementById('sub-btn')
const answerEls=document.querySelectorAll('.answer')
let quiz=document.getElementById('quiz')

let quizData=[{question:'How old is buhari?', a:16, b:18, c:79, d: 3,  correct:'c' },
{question:'what is the most used programming language in 2019?', a:'javascript', b:'java', c:'python', d:'c', correct:'a'},
{question:'who is the president of Nigeria?', a:'clinton', b:'jean neils', c:'buhari', d:'jonathan', correct:'c'},
{question:'what does html stands for?', a:'hit man left leg', b:'hype tattoo mick lang',
 c:'hypertext markup language', d:'high daddy must leave', correct:'c'},
{question:'what does css stands for ?', a:'cascading stylesheet', b:'casting singer seren', c:'caught shooting shots',
d:'cashier styling sheet', correct:'a'
}]

let currentQuiz=0
let score=0

function getQuiz() {
    deSelectAns()
    
    currentQuizData=quizData[currentQuiz]

    questionEl.textContent=currentQuizData.question
    
    aText.textContent=currentQuizData.a
    bText.textContent=currentQuizData.b
    cText.textContent=currentQuizData.c
    dText.textContent=currentQuizData.d


 
}
getQuiz()


function getSelected() {
    
    let answer=''
 answerEls.forEach((answerEl)=>{
     if (answerEl.checked) {
         answer=answerEl.id
     }



 })
 return answer
}



function deSelectAns() {
    answerEls.forEach((answerEl)=>{
        answerEl.checked=false
})
}

subBtn.addEventListener('click', function () {


       let answer= getSelected()
        if (answer) {
            
                if (answer===quizData[currentQuiz].correct) {
                    score++
                }

                 currentQuiz++
            if (currentQuiz<quizData.length) {
                getQuiz()
            }
            else{
                 quiz.innerHTML=`<h2>you answered correctly at ${score}/${quizData.length} questions.</h2> 
                 <button onclick='location.reload()'>reload</button>`
                 
            }
        }
    

    
    
})
