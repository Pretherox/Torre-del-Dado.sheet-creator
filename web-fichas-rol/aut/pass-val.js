const password = document.getElementById("pass")
const confirm_password = document.getElementById("con_pass")

function validatePassword(){
    if(password.value != confirm_password.value){
        confirm_password.setCustomValidity("Passwords Don't Match");
    }
    else {
        confirm_password.setCustomValidity('');
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;