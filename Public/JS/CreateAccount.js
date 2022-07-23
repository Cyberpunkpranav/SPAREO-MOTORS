let profilename= document.getElementById("Usernamebox")
let profilemobile= document.getElementById("Mobile_Nobox")
let profileemail= document.getElementById("Emailbox")
let profilepassword= document.getElementById("passwordbox")
let profilepassword2 = document.getElementById("confirmpasswordbox")
let usermessage = document.getElementById("message");
let signup =document.getElementById("signup");

    
    
function createprofile(){
    localStorage.setItem("name",JSON.stringify(profilename.value));
   
    localStorage.setItem("mobile",JSON.stringify(profilemobile.value));
    
    localStorage.setItem("email",JSON.stringify(profileemail.value));
   
    localStorage.setItem("Password",JSON.stringify(profilepassword.value));
   
    localStorage.setItem("password",JSON.stringify(profilepassword2.value));


    if( profilepassword.value !== profilepassword2.value){
        usermessage.textContent = "Password does not match.";
    }
    else if(profilename.value && profilemobile.value && profileemail.value && profilepassword.value && profilepassword2.value){
        profilename = JSON.parse(localStorage.getItem("name"));
        profilephone = JSON.parse(localStorage.getItem("mobile"));
        emailoutput = JSON.parse(localStorage.getItem("email"));
        profilepassoutput = JSON.parse(localStorage.getItem("Password"));
        pass2output= JSON.parse(localStorage.getItem("password")); 
        window.location.href="index.html";
    } 
 
    else{
        usermessage.textContent = "Please complete your details";
        localStorage.clear();
}
}


