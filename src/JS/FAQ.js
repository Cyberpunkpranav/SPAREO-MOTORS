let mytextarea = document.getElementById("my-textarea");
let spacearea = document.getElementById("meter");
let totalwords = 100;
let question = document.getElementById("question");
let questionwarning = document.getElementById("question-warning");
let qa = document.getElementById("q-a");
let submitbtn =document.getElementById("submitbtn");
let questionsection =document.getElementById("questionsection");
 mytextarea.addEventListener('input',()=>{
    const remainingwords=totalwords - mytextarea.value.length;
    spacearea.textContent = `${remainingwords} characters are remaining`;
   submitbtn.disabled=false;
   if(mytextarea.value.length ==0){
      submitbtn.disabled=true;
   }
 });


   function printquestion(){
      questionsection.style.display="block";
      console.log(mytextarea.value);
      question.innerHTML+=  `<h3>Question: ${mytextarea.value} </h3>`;
      }
   let Answerbtn =document.getElementById("Answerbtn");
   let answerarea = document.getElementById("answerarea");
  
  Answerbtn.addEventListener("click",function(){
     console.log(answerarea.value);
   qa.innerHTML = `<h3 style='border='1px solid black''>Question: ${mytextarea.value}</h3><h5>Answer: ${answerarea.value}</h5>`;
  })

  function Answerarea(){
   answerarea.style.display="block";
  }

