let number = document.querySelectorAll(".save__text");
let message = document.querySelector(".message");
const burger = document.querySelector(".header__burger");
const burger__list = document.querySelector(".header__nav");
const body = document.querySelector("body")



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



