

//Loginpage username output
let useroutput= JSON.parse(localStorage.getItem("Username"));
//create profile details output
let profilename = JSON.parse(localStorage.getItem("name"));
let profilephone = JSON.parse(localStorage.getItem("mobile"));
let emailoutput = JSON.parse(localStorage.getItem("email"));
//passwords will be stored in DB
let profilepassoutput = JSON.parse(localStorage.getItem("Password"));
let pass2output= JSON.parse(localStorage.getItem("password"));
//profile card input
let User = document.getElementById("ProfileUsername");
let Profileemail = document.getElementById("Profileemail");
let Profilenumber = document.getElementById("Profilenumber");
//will authenticate by subscription page
let ProfileSubscription = document.getElementById("ProfileSubscription");
ProfileSubscription.textContent = "Subscription : " + "None";
//functions
User.textContent = "Username : " + profilename
 Profileemail.textContent = "Email : " + emailoutput;
 Profilenumber.textContent = "Mobile No. : " + profilephone;

function loggingout(){
    window.location.href="index.html";
}

let logout = document.getElementById("logout");
logout.addEventListener("click",function(){
    window.location.href="index.html";
})

