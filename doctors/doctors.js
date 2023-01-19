let doctorsRow = document.querySelector(".doctors__row");



const worker = [
    {
        "picture": "../img/1.JPG",
        "name": "Врач 1",
        "profesion": "Професія"
    },
    {
        "picture": "../img/2.JPG",
        "name": "Врач 1",
        "profesion": "лікар"
    },
    {
        "picture": "../img/1.JPG",
        "name": "Врач 1",
        "profesion": "Професія"
    },
    {
        "picture": "../img/1.JPG",
        "name": "Врач 1",
        "profesion": "Професія"
    },
    {
        "picture": "../img/1.JPG",
        "name": "Врач 1",
        "profesion": "Професія"
    }
]

let htmlArticle = '';
let info = '';
worker.forEach(e => {
    const item = `
    <article class="doctors__article">
        <div class="doctors__picture" style="background-image: url(${e.picture})">
        </div>
        <h5>${e.name}</h5>
        <p>${e.profesion}</p>
    </article>
    `

    htmlArticle += item
});

doctorsRow.innerHTML = htmlArticle 
let article = document.querySelectorAll(".doctors__article")
console.log(article);