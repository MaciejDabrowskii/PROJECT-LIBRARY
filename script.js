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
    reset()
    }
);

addButton.addEventListener("click", ()=> {
        const title = document.getElementById("inputTitle");
        const author = document.getElementById("inputAuthor");
        const pagesNumber = document.getElementById("inputNumber");
        let alreadyRead = checkButton();
        const book = new Book(title.value, author.value, pagesNumber.value, alreadyRead)
        myLibrary.push(book);
        reset();

    }
);

libraryButton.addEventListener('click', () => {
    if (myLibrary[0] === undefined) {
        alert("No books in library yet, please add books")
    }else {
        const bookCardsDiv = document.querySelector('.cardsSpace');

        if(clickCounter === 0) {
            addingBookcards(bookCardsDiv);
            deleteButtonFunctions();
            switchButtonFunctions();
            clickCounter += 1;
        }
        
        else {
            removeAllChildNodes(bookCardsDiv);
            addingBookcards(bookCardsDiv);
            deleteButtonFunctions();
            switchButtonFunctions();
        }
    }
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        reset();
    })
})

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function reset() {
    const title = document.getElementById("inputTitle");
    const author = document.getElementById("inputAuthor");
    const pagesNumber = document.getElementById("inputNumber");
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

function switchButtonFunctions() {
    const buttonSwitchRead = document.querySelectorAll(".cardButton1");
    buttonSwitchRead.forEach((button, index) => {
        button.addEventListener("click", () => {

            if (typeof myLibrary[index].alreadyRead === 'undefined' || myLibrary[index].alreadyRead === "No") {
                myLibrary[index].alreadyRead = "Yes";
            }
            else {
                myLibrary[index].alreadyRead = "No";
            }
            const bookCardsDiv = document.querySelector('.cardsSpace');
            refreshDiv(bookCardsDiv);
        });
    });
}

function deleteButtonFunctions() {
    const buttonDeleteBook = document.querySelectorAll(".cardButton0");
    buttonDeleteBook.forEach((button, index) => {
        button.addEventListener("click", () => {
            myLibrary.splice(index, 1);
            const bookCardsDiv = document.querySelector('.cardsSpace');
            refreshDiv(bookCardsDiv);
        });
    });
}

function refreshDiv(bookCardsDiv) {
    removeAllChildNodes(bookCardsDiv);
    addingBookcards(bookCardsDiv);
    deleteButtonFunctions();
    switchButtonFunctions();
}

function addingBookcards(bookCardsDiv) {
    myLibrary.forEach((book, i) => {
        const div = document.createElement('div');
        div.classList.add('book-card');
        div.insertAdjacentHTML( 'beforeend', '<p>' + `Title: <span class="card-data">${book.title}</span>` + '</p>' + '<p>' + `Author: <span class="card-data">${book.author}</span>` + '</p>' + '<p>' + `Number of pages: <span class="card-data">${book.pagesNumber}</span>` + '</p>' + '<p>' + `Already read: <span class="card-data">${book.alreadyRead}</span>` + '</p>');
        bookCardsDiv.appendChild(div);
        const divBookCard = document.querySelectorAll('.book-card');
        removeSpanStyle();

        for (let j = 0; j < 2; j++) {
            if (j === 0) {
                const cardButton = document.createElement('button');
                cardButton.classList.add(`cardButton${j}`);
                cardButton.insertAdjacentHTML( 'beforeend', `Delete book <span class="x-circle">&times;</span>`);
                divBookCard[i].appendChild(cardButton);

            } else {
                const cardButton = document.createElement('button');
                cardButton.classList.add(`cardButton${j}`);
                cardButton.insertAdjacentHTML( 'beforeend', `Already read <span class="swap">???</span>`);
                divBookCard[i].appendChild(cardButton);
            }
        }
    });
}
function removeSpanStyle() {
    let spans = document.querySelectorAll('.card-data');
    spans.forEach(span => {
        if (span.innerHTML === "") {
            span.classList.remove('card-data');
        }
    })
};
function checkButton() {
    const radioButtons = Array.from(document.querySelectorAll(('input[name="read"]')));
        for(let button of radioButtons) {
        if (button.checked) {
            return button.value
        }
    }
};
