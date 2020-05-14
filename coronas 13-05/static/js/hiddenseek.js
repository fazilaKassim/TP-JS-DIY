const hidden = document.querySelector(".fa-eye-slash");
const show = document.querySelector(".fa-eye");
const inputPassword = document.getElementById("mdp");


hidden.onclick = (evt) => {
    evt.target.classList.toggle("not-active");
    inputPassword.setAttribute("type", "password");
    show.classList.toggle("active")
};

show.onclick = (evt) => {
    evt.target.classList.toggle("not-active")
    inputPassword.setAttribute("type", "text")
    hidden.classList.toggle("active")
};