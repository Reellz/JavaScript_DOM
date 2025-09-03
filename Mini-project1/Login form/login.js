let passwordInput = document.querySelector("#password")
let passwordButton = document.querySelector("#password-button")

passwordButton.addEventListener('click', function (){
    if (passwordInput.type === 'password'){
        passwordInput.type = 'text';
        passwordButton.innerHTML = '<i class="fa fa-eye-slash"></i>';
    }else {
        passwordInput.type = 'password';
        passwordButton.innerHTML = '<i class="fa fa-eye"></i>';
    }
});