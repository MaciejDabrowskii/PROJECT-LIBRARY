// let button = document.getElementById("btn");
let myLibrary = [];
const openButton = document.getElementById("open");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById('close');
const addButton = document.getElementById("addToLibrary");

openButton.addEventListener('click', function() {
        const modal = document.getElementById('modal');
        modal.classList.add('active');
        overlay.classList.add('active');
    }
);

closeButton.addEventListener('click', () => {
        const modal = document.getElementById('modal');
        const title = document.getElementById("inputTitle");
        const author = document.getElementById("inputAuthor");
        const pagesNumber = document.getElementById("inputNumber");
        reset(title, author, pagesNumber);
    }
);

addButton.addEventListener("click", ()=> {
        const title = document.getElementById("inputTitle");
        const author = document.getElementById("inputAuthor");
        const pagesNumber = document.getElementById("inputNumber");
        const modal = document.getElementById('modal');
        const book = new Book(title.value, author.value, pagesNumber.value)
        myLibrary.push(book);
        reset(title, author, pagesNumber);

    }
);

function reset(title, author, pagesNumber) {
    title.value = "";
    author.value = "";
    pagesNumber.value = "";
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

function Book(title, author, pagesNumber, alreadyRead) {
        this.title = title
        this.author = author
        this.pagesNumber = pagesNumber
        this.alreadyRead = alreadyRead
        this.info = () => (`${title} by ${author}, ${pagesNumber} pages, ${alreadyRead}.`)
}
