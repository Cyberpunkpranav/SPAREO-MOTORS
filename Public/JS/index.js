let loginbutton = document.getElementById("LOG_IN_button")
let username = document.getElementById("Usernamebox")
let password = document.getElementById("Passwordbox")
let usermessage = document.getElementById("useralert");

let profilename = JSON.parse(localStorage.getItem("name"));
let profilepassoutput = JSON.parse(localStorage.getItem("Password"));
function Login(){
    useroutput = username.value
    passoutput = password.value
     if(useroutput === profilename && passoutput === profilepassoutput){
        window.location.href="mainpage.html"

    }else if( useroutput !== profilename ){
        usermessage.textContent = "Please enter correct Username";

    } else if (passoutput !== profilepassoutput) {
        usermessage.textContent = "Please enter correct password";
    } else{
            usermessage.textContent = "Please Enter your Username or Password"
        } 
    }


 let Googleauthentication = document.getElementById("signinwithgoogle");
 let Emailauthentication = document.getElementById("signinwithemail");
 let Facebookauthentication = document.getElementById("signinwithfacebook");
   Googleauthentication.style.display="none"
    Emailauthentication.style.display="none" 
 Facebookauthentication.style.display="none"  

 function newuser(){
    localStorage.clear();
    window.location.href="CreateAccount.html";

 }