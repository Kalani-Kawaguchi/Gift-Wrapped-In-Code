const heart = document.querySelector(".heart");
const main = document.querySelector("main");

heart.addEventListener("click", () => {
    main.classList.add("is-open");
})