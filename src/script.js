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
function validatePassword(password_value){
    // checkStrength(password_value);

    let password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!^%*?&]{8,15}$/; 
    
    if (password_regex.test(password_value)) { 
        document.getElementById("error_message").innerText = password_value+ " Password is strong"; 
    }
    else{
        return false;
    }

    let count = 0; 
    let lowercase_regex = /[a-z]/; 
    if (lowercase_regex.test(password_value)) count++; 
    let uppercase_regex = /[A-Z]/; 
    if (uppercase_regex.test(password_value)) count++; 
    let numbers_regex = /[\d]/; 
    if (numbers_regex.test(password_value)) count++; 
    let special_character_regex = /[!@#$%^&*.?]/; 
    if (special_character_regex.test(password_value)) count++; 
  
    error_message.innerHTML = password_value, "Password is " + strength[count];
    return true; 
}

function isValidPassword(password) {
    // Password must be at least 8 characters long and contain at least one digit
    var passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    return passwordRegex.match(password);
}

function validateForm() {
    //    e.preventDefault();
        document.getElementById("error_message").style.visibility = "visible";

        // Reset error message
        document.getElementById("error_message").innerText = "";

        // var name = document.getElementById("user_name").value.trim();
        var email = document.getElementById("user_email").value.trim();
        var password = document.getElementById("user_password").value.trim();

        if(!isValidEmail(email)) {
            displayErrorMessage("Please enter a valid email address");
            return false;
        }

        // Validate password
        var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$/;
        if(passwordRegex.test(password)) {
           displayErrorMessage('Password must contain at least one uppercase letter, one number, one special character, and be 8-15 characters long.');
           return false;
        }


        // if (!isValidPassword(password)) {
        //     displayErrorMessage("Password must be at least 8 characters long and contain at least one digit");
        //     return false;
        // }  

        // Additional validation rules can be added as needed

        // If all validations pass, submit the form
        // document.getElementById("error_message").innerText = "";
        // alert("Form submitted successfully!");
        window.location.href="index.html";
        return true;
}

function isValidEmail(email) {
        // Simple email validation using a regular expression
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
}

function displayErrorMessage(message) {
        // Display error message in the designated element
        document.getElementById("error_message").innerHTML = message;
}