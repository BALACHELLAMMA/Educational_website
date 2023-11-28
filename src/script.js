// =================================== method 2 ==========================================
// const user_name = document.getElementById("name");
// const user_email = document.getElementById("email");
// const user_password = document.getElementById("password"); 
// const error_message = document.getElementById("error_message");

// function validateForm() {  
//     error_message.style.visibility="visible";
//     error_message.innerHTML="";
//     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//     if(user_name.value=="" || user_email=="" || user_password.value==""){
//        error_message.innerHTML = "don't leave any input field as empty !";
//     }
    
//     // if(user_email.test(validRegex)){
//     //    error_message.innerHTML = "Please, Enter Valid email"
//     // }

//     console.log(validatePassword(user_password.value));
// }

// =================================== method 2 ==========================================

// const strength = { 
//     1: "very Weak", 
//     2: "Weak", 
//     3: "Meduim", 
//     4: "Strong", 
// };

//password's length check
// function checkStrength(password_value) { 
//     if (password_value.length > 15) 
//         error_message.innerHTML = " Password is too lengthy";
//     else if (password_value.length < 8){ 
//         console.log(password_value);
//         error_message.innerHTML = " Password is too short"; 
//     }
// }

// check whether the password is validate or not
// function validatePassword(password_value){
//     // checkStrength(password_value);

//     let password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/; 
    
//     if (password_regex.test(password_value)) { 
//         document.getElementById("error_message").innerText = password_value+ " Password is strong"; 
//     }
//     else{
//         return false;
//     }

//     let count = 0; 
//     let lowercase_regex = /[a-z]/; 
//     if (lowercase_regex.test(password_value)) count++; 
//     let uppercase_regex = /[A-Z]/; 
//     if (uppercase_regex.test(password_value)) count++; 
//     let numbers_regex = /[\d]/; 
//     if (numbers_regex.test(password_value)) count++; 
//     let special_character_regex = /[!@#$%^&*.?]/; 
//     if (special_character_regex.test(password_value)) count++; 
  
//     error_message.innerHTML = password_value, "Password is " + strength[count];
//     return true; 
// }

// function isValidPassword(password) {
//     // Password must be at least 8 characters long and contain at least one digit
//     var passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
//     return passwordRegex.match(password);
// }

// function validateForm() {
//     //    e.preventDefault();
//         document.getElementById("error_message").style.visibility = "visible";

//         // Reset error message
//         document.getElementById("error_message").innerText = "";

//         // var name = document.getElementById("user_name").value.trim();
//         let email = document.getElementById("user_email").value.trim();
//         let password = document.getElementById("user_password").value.trim();
//         let isValid = true;
        

//         if(!isValidEmail(email)) {
//             displayErrorMessage("Please enter a valid email address");
//             isValid = false;
//         }

//         // Validate password
//         var passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
//         if(passwordRegex.test(password)) {
//            displayErrorMessage('Password must contain at least one uppercase letter, one number, one special character, and be 8-15 characters long.');
//            isValid = false;
//         }


//         // if (!isValidPassword(password)) {
//         //     displayErrorMessage("Password must be at least 8 characters long and contain at least one digit");
//         //     return false;
//         // }  

//         // Additional validation rules can be added as needed

//         // If all validations pass, submit the form
//         // document.getElementById("error_message").innerText = "";
//         // alert("Form submitted successfully!");
//         if(isValid)
//              window.location.href="index.html";
//         return true;
// }

// function isValidEmail(email) {
//         // Simple email validation using a regular expression
//         var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
// }

// function displayErrorMessage(message) {
//         // Display error message in the designated element
//         document.getElementById("error_message").innerHTML = message;
// }

// =================================== method 3 ==========================================

const form = document.getElementById("sign_up_form");
const user_name = document.getElementById("user_name");
const user_email = document.getElementById("user_email");
const user_password = document.getElementById("user_password");
let email_error_message = document.getElementById("email_error");
let password_error_message = document.getElementById("password_error");
let isValid = false;



// Function to validate the email
const validateEmail = (inputEmail)=> inputEmail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

// Function to validate password
const validatePassword = (inputPassword) => inputPassword.value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/);
// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);



// Function used to display errors
// const generateError = (errorName, errorMsg) =>{
//     if(errorName == "email"){
//         email_error_message.innerText = errorMsg;    
//     }else if(errorName == "password"){
//         password_error_message.innerText = errorMsg;
//     }
// }

const formValidate = (inputEmail, inputPassword) =>{
    if(!validateEmail(inputEmail)){
        email_error_message.innerHTML = "please enter a valid email address";
        isValid = false;
        // document.getElementsByClassName("email error").style.display="block";
        // generateError("email",email_error_message);
        return;
    }
    else{
        email_error_message.innerHTML="";
        isValid = true;
    }

    if(!validatePassword(inputPassword)){
        password_error_message.innerHTML = 'Password must contain at least one uppercase letter, one number, one special character, and be 8-15 characters long.';
        isValid = false;
        // generateError("password",password_error_message);
        return;
    }
    else{
        password_error_message.innerHTML="";
        isValid = true;
    }
  
}

//triggers when user submits the form
form.addEventListener("submit",(e) => {
    e.preventDefault();
    formValidate(user_email, user_password);
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
        user_password.style.borderColor = "red";
        user_password.parentElement.classList.add("error");
        isValid = false;
    }
    else{
        user_password.style.borderColor = "rgb(213, 211, 211)";
        isValid = true;
    }
});
