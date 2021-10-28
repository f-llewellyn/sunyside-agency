const menuBtn = document.querySelector(".burger")
const menu = document.querySelector(".nav__links")

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden")
})