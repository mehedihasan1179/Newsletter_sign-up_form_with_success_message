const container = document.getElementById("container");
const left = document.getElementById("left");
const right = document.getElementById("right");

const errorMessage = document.getElementById("error-message");
const inputEmail = document.getElementById("email");
const submitBtn = document.getElementById("submitBtn");
const userEmail = document.getElementById("user-email");

const dismissBtn = document.getElementById("dismissBtn");
const messageSuccess = document.getElementById("message-success"); 



function successForm(){
    container.classList.add("success");
    messageSuccess.classList.add("active");
    left.style.display = "none";
    right.style.display = "none";
}


function validateEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regexEmail.test(email);
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = inputEmail.value.trim();

    if(validateEmail(email)) {
        successForm();

        userEmail.innerText = email;
        inputEmail.value = "";

        errorMessage.classList.remove("active");
        inputEmail.classList.remove("active");
    } else{
        errorMessage.classList.add("active");
        inputEmail.classList.add ("active");
    }
})

dismissBtn.addEventListener("click", () => {
    container.classList.remove("success");
    right.style.display = "block";
    left.style.display = "block";
    messageSuccess.classList.remove("active");
})

