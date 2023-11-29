const login_form = document.getElementById("login_form");
const user_email = document.getElementById("user_email");
const user_password = document.getElementById("user_password");
const toggle_image = document.getElementById("toggle_image");
let email_error_message = document.getElementById("email_error");
let password_error_message = document.getElementById("password_error");
let isValid = false;


// Function to validate the email
const validateEmail = (inputEmail)=> inputEmail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

// Function to validate password
const validatePassword = (inputPassword) => inputPassword.value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/);

const loginformValidate = (inputEmail, inputPassword) =>{
    if(!validateEmail(inputEmail)){
        email_error_message.innerHTML = "please enter a valid email address";
        isValid = false;
        return;
    }
    else{
        email_error_message.innerHTML="";
        isValid = true;
    }

    if(!validatePassword(inputPassword)){
        password_error_message.innerHTML = 'Password must contain at least one uppercase letter, one number, one special character, and be 8-15 characters long.';
        isValid = false;
        return;
    }
    else{
        password_error_message.innerHTML="";
        isValid = true;
    }
  
}


login_form.addEventListener("submit",(e) => {
    e.preventDefault();
    loginformValidate(user_email, user_password);
    if(isValid) window.location.assign("../html/home.html");
});

// Focusout event listener. Triggers when the user clicks anywhere else besides the input
user_email.addEventListener("focusout", (e)=>{
    if(!validateEmail(user_email)){
        user_email.style.borderColor = "red";
        user_email.parentElement.classList.add("error");
        isValid = false;
    }
    else{
        user_email.style.borderColor = "rgb(213, 211, 211)";
        isValid = true;
    }
});

// Focusout event listener triggers when the user clicks anywhere else besides the input
user_password.addEventListener("focusout", (e)=>{
    if(!validatePassword(user_password)){
        // user_password.style.borderColor = "red";
        // user_password.parentElement.classList.add("error");
        isValid = false;
    }
    else{
        // user_password.style.borderColor = "rgb(213, 211, 211)";
        isValid = true;
    }
});


