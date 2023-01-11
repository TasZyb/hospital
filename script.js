number = document.querySelector(".save__text");
message = document.querySelector(".message");
burger = document.querySelector(".header__burger");
burger__list = document.querySelector(".header__nav");
number.addEventListener("click", () => { 
    navigator.clipboard.writeText(number.innerHTML);
    message.style.animation = "";
    setTimeout(function() {
        message.style.animation = "mess 2.5s";
      }, 1);
});
burger.addEventListener("click", () => { 
    burger.classList.toggle("active");
    burger__list.classList.toggle("active__list");
});


