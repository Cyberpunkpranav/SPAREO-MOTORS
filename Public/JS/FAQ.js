let mytextarea = document.getElementById("my-textarea");
let spacearea = document.getElementById("meter");
let totalwords = 100;
 mytextarea.addEventListener('input',()=>{
    const remainingwords=totalwords - mytextarea.value.length;
    spacearea.textContent = `${remainingwords} characters are remaining`;
 });


