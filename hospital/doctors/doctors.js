const doctorsRow = document.querySelector(".doctors__row");
const popap = document.querySelector(".popap");




const worker = [
    {
        id: "one",
        picture: "../img/1.JPG",
        name: "Врач 1",
        profesion: "Професія"
    },
    {
        id: "two",
        picture: "../img/2.JPG",
        name: "Врач 2",
        profesion: "лікар"
    },
    {
        id: "three",
        picture: "../img/1.JPG",
        name: "Врач 3",
        profesion: "Професія"
    },
    {
        id: "four",
        picture: "../img/1.JPG",
        name: "Врач 4",
        profesion: "Професія"
    },
    {
        id: "five",
        picture: "../img/1.JPG",
        name: "Врач 5",
        profesion: "Професія"
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
    <div class="popap__img"></div>
    <h2 class="popap__title">${obj.name}</h2>
    <p class="popap__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium, obcaecati magni repellat nihil nam a vitae itaque! Laborum obcaecati magnam deleniti, perspiciatis porro error. Deserunt exercitationem id natus vel iusto.</p>
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
    });

})



document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popap.classList.remove('activePopap');
        popupBg.classList.remove('popupBg');
    }
});