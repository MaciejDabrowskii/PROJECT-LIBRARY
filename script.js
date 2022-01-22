let myLibrary = [];
const openButton = document.getElementById("open");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById('close');
const addButton = document.getElementById("addToLibrary");
const libraryButton = document.getElementById('library');
let clickCounter = 0;

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
        const radioButton = document.querySelectorAll(('input[name="read"]'));
        let alreadyRead;
        checkButton();
        function checkButton() {
            radioButton.forEach(button => {
                if(button.checked) {
                    alreadyRead = button.value
                }
            })
        };
        const book = new Book(title.value, author.value, pagesNumber.value, alreadyRead)
        myLibrary.push(book);
        reset(title, author, pagesNumber);

    }
);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

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

libraryButton.addEventListener('click', () => {
    if (myLibrary[0] === undefined) {
        alert("No books in library yet, please add books")
    }else {
        const bookCardsDiv = document.querySelector('.show-books');

        if(clickCounter === 0) {
            myLibrary.forEach(book => {
            const div = document.createElement('div');
            div.classList.add('book-card');
            div.innerHTML = '<p>' + `Title: ${book.title}` + '</p>' + '<p>' + `Author: ${book.author}` + '</p>' + '<p>' + `Number of Pages: ${book.pagesNumber}` + '</p>' + '<p>' + `Already Read: ${book.alreadyRead}` + '</p>';
            bookCardsDiv.appendChild(div);
            console.log(div.textContent);
            })
            clickCounter += 1;
        }
        
        else {
            removeAllChildNodes(bookCardsDiv);
            myLibrary.forEach(book => {
                const div = document.createElement('div');
                div.classList.add('book-card');
                div.innerHTML = '<p>' + `Title: ${book.title}` + '</p>' + '<p>' + `Author: ${book.author}` + '</p>' + '<p>' + `Number of Pages: ${book.pagesNumber}` + '</p>' + '<p>' + `Already Read: ${book.alreadyRead}` + '</p>';
                bookCardsDiv.appendChild(div);
                console.log(div.textContent);
                })
        }
    }
})