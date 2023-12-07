const sign_up_form = document.getElementById("sign_up_form");
const login_form = document.getElementById("login_form");
const user_name = document.getElementById("user_name");
const user_email = document.getElementById("user_email");
const user_password = document.getElementById("user_password");
const toggle_image = document.getElementById("toggle_image");
let name_error_message = document.getElementById("name_error");
let email_error_message = document.getElementById("email_error");
let password_error_message = document.getElementById("password_error");
let isValid = false;

// Function to validate the name
const validateName = (inputName) => inputName.value.match(/^[a-zA-Z\s'.-]+$/);

// Function to validate the email
const validateEmail = (inputEmail)=> inputEmail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

// Function to validate password
const validatePassword = (inputPassword) => inputPassword.value.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/);

//save form data in local storage
function saveFormData(formData) {
    const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];
    storedFormData.push(formData);
    localStorage.setItem('formData', JSON.stringify(storedFormData));
}


const signUpFormValidate = (inputName,inputEmail, inputPassword) =>{

    if(!validateName(inputName)){
        name_error_message.innerHTML = "please enter a valid name";
        isValid = false;
        return;
    }
    else{
        name_error_message.innerHTML="";
        isValid = true;
    }

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

    if(isValid){
        const formData = {
            fullName: user_name.value,
            email: user_email.value,
            password: user_password.value
        };
        saveFormData(formData);   
        window.location.assign("../html/index.html");
    }
  
}

const loginFormValidate = (inputEmail, inputPassword) =>{
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

    if(isValid) {
        const userDetails = JSON.parse(localStorage.getItem("formData"));
        let isMatch = false;
        for(const user in userDetails) { 
            if(user_email.value === userDetails[user].email && user_password.value === userDetails[user].password){
               isMatch = true;
               window.location.assign("../html/home.html");
               break;
            }
        };
        if(!isMatch){
            alert("Incorrect email or password");
        }
    }
  
}


//triggers when user submits the form
if(sign_up_form){
    sign_up_form.addEventListener("submit",(e)=>{
        e.preventDefault();
        signUpFormValidate(user_name,user_email,user_password);
    });
}

if(login_form){
    login_form.addEventListener("submit",(e)=>{
        e.preventDefault();
        loginFormValidate(user_email,user_password);
    });
}


// Focusout event listener. Triggers when the user clicks anywhere else besides the input
// user_name.addEventListener("focusout", (e)=>{
//     if(!validateName(user_name)){
//         user_name.style.borderColor = "red";
//         user_name.parentElement.classList.add("error");
//         isValid = false;
//     }
//     else{
//         user_name.style.borderColor = "rgb(213, 211, 211)";
//         isValid = true;
//     }
// });


// Focusout event listener. Triggers when the user clicks anywhere else besides the input
// user_email.addEventListener("focusout", (e)=>{
//     if(!validateEmail(user_email)){
//         user_email.style.borderColor = "red";
//         user_email.parentElement.classList.add("error");
//         isValid = false;
//     }
//     else{
//         user_email.style.borderColor = "rgb(213, 211, 211)";
//         isValid = true;
//     }
// });

// Focusout event listener triggers when the user clicks anywhere else besides the input
// user_password.addEventListener("focusout", (e)=>{
//     if(!validatePassword(user_password)){
//         // user_password.style.borderColor = "red";
//         // user_password.parentElement.classList.add("error");
//         isValid = false;
//     }
//     else{
//         // user_password.style.borderColor = "rgb(213, 211, 211)";
//         isValid = true;
//     }
// });