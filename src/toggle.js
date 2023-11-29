toggle_image.addEventListener("click", function () {
    // toggle the type attribute
    const type = user_password.getAttribute("type") === "password" ? "text" : "password";
    user_password.setAttribute("type", type);

    type === "text" ? toggle_image.src="../img/hide_password_icon.png" : toggle_image.src="../img/password_icon.svg";
    user_password.style.border = "none";
    user_password.style.padding ="0";

});