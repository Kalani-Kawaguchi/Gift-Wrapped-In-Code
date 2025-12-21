const heart = document.querySelector(".heart");
const text = document.querySelector(".text");

heart.addEventListener("click", () => {
    text.classList.add("is-open");
})