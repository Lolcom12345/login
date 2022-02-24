document.addEventListener("DOMContentLoaded", () => {
    const LoginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    
    document.querySelector("#linkCreateAccount").addEventListener("click", () => {
        LoginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", () => {
        LoginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });


});c
