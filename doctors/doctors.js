const doctorsRow = document.querySelector(".doctors__row");
const popap = document.querySelector(".popap");




const worker = [
    {
        id: "one",
        picture: "img/6.jpg",
        name: "Діденко Оксана Зіновіївна",
        profesion: "Лікар-Кардіолог",
        info: 'Стаж: 18 років. Уролог, лікар ультразвукової діагностики. Інтернатура, спец. "Хірургія" (2004 - 2006 рр., ЛНМУ ім. Данила Галицького). Ординатура, спец. "Урологія" (2010 - 2011 рр., ЛНМУ ім. Данила Галицького)'
    },
    {
        id: "two",
        picture: "img/7.jpg",
        name: "Діденко Тарас Васильович",
        profesion: "Лікар-Уролог",
        info: 'Стаж: 18 років. Кардіолог, терапевт вищої категорії. Кандидат медичних наук, асистент кафедри пропедевтики внутрішньої медицини ЛНМУ ім. Данила Галицького, автор 19 друкованих праць'

    },
    {
        id: "three",
        picture: "img/8.jpg",
        name: "Бліхарський Юрій Зіновійович",
        profesion: "Професія",
        info: "Стаж 16 років Хірург вищої категорії Кандидат медичних наук, асистент кафедри хірургії #1 ЛНМУ ім. Данила Галицького Додаткові спеціалізації: ендоскопія (2012 р.) ультразвукова діагностика(2018р р.)"
    },
    {
        id: "four",
        picture: "img/1.JPG",
        name: "Ходань Оксана Андріївна",
        profesion: "Лікар-Eндокринолог",
        info: 'Лікар ендокринолог. Стаж роботи 15 років за спеціальністю ендокринологія. 2006-2008 рр. Інтернатура за спеціальністю внутрішні хвороби. 2009р. спеціалізація ендокринологія. Додаткова спеціалізація ультразвукова діагностика 2021рік.'
    },
    {
        id: "five",
        picture: "img/9.jpg",
        name: "Музика Жанетта Антонівна",
        profesion: "Лікар-УЗД",
        info: " Лікар УЗД вищої категорії (стаж узд- 30 років)"
    },
    {
        id: "six",
        picture: "img/10.jpg",
        name: "Музика Жанетта Антонівна",
        profesion: "Лікар-УЗД",
        info: "Лікар УЗД вищої категорії (стаж узд- 30 років)"
    }
]

let htmlArticle = '';
let info = '';
worker.forEach(e => {
    const item = `
    <article class="doctors__article" id=${e.id}>
        <div class="doctors__picture" style="background-image: url(${e.picture})">
        </div>
        <h5>${e.name}</h5>
        <p>${e.profesion}</p>
    </article>
    `

    htmlArticle += item;
});

doctorsRow.innerHTML = htmlArticle;
const generator = (obj) => (
    `
    <div class="popap__img" style="background-image: url(${obj.picture})"></div>
    <h2 class="popap__title">${obj.name}</h2>
    <h3 class="popap__second">${obj.profesion}</h3>
    <p class="popap__text">${obj.info}</p>
     `
);

// let article = document.querySelectorAll(".doctors__article");
const doctorsClick = document.querySelectorAll(".doctors__article");
const popupBg = document.querySelector(".back__opasity");
let popapText = `ys`
console.log(doctorsClick);
doctorsClick.forEach(e => {
    e.addEventListener('click', () => { // Вешаем обработчик на крестик
        popap.innerHTML = generator(worker.find(i => i.id === e.id));
        popap.classList.add('activePopap');
        popupBg.classList.add('popupBg');
        body.classList.add("scroll__lock")
    });
})



document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popap.classList.remove('activePopap');
        popupBg.classList.remove('popupBg');
        body.classList.remove("scroll__lock")
    }
});