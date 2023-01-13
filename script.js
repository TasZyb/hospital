let number = document.querySelectorAll(".save__text");
let message = document.querySelector(".message");
const burger = document.querySelector(".header__burger");
const burger__list = document.querySelector(".header__nav");
const body = document.querySelector("body");
const newsPrev = document.querySelector(".news__prev");
const newsNext = document.querySelector(".news__next");
const newsRows = document.querySelector(".news__rows");




number.forEach(e =>{
    
    e.addEventListener("click", () => { 
        console.log(number);
        navigator.clipboard.writeText(e.innerHTML);
        message.style.animation = "";
        setTimeout(function() {
            message.style.animation = "mess 2.5s";
          }, 1);
    });
})


burger.addEventListener("click", () => { 
    burger.classList.toggle("active__burger");
    burger__list.classList.toggle("active__list");
    body.classList.toggle("scroll__lock")
});
newsPrev.addEventListener("click", () => {
    let move = document.querySelector(".news__rows").offsetWidth;

    newsRows.style.left = "0px";
    console.log(move);
    newsPrev.style.backgroundColor = "rgb(71, 129, 109)";
    newsNext.style.backgroundColor = "aquamarine";
});
newsNext.addEventListener("click", () => {
    let move = document.querySelector(".news__rows").offsetWidth;

    newsRows.style.left = (move*-1).toString() + "px";
    console.log(move);
    newsNext.style.backgroundColor = "rgb(71, 129, 109)";
    newsPrev.style.backgroundColor = "aquamarine";
});


