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
        styleRadioButton()
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
            switchButtonFunctions()
        }
    }
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
        });
    });
}

function deleteButtonFunctions() {
    const buttonDeleteBook = document.querySelectorAll(".cardButton0");
    buttonDeleteBook.forEach((button, index) => {
        button.addEventListener("click", () => {
            myLibrary.splice(index, 1);
        });
    });
}

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        
        reset();
    })
})

function addingBookcards(bookCardsDiv) {
    myLibrary.forEach((book, i) => {
        const div = document.createElement('div');
        div.classList.add('book-card');
        div.innerHTML = '<p>' + `Title: ${book.title}` + '</p>' + '<p>' + `Author: ${book.author}` + '</p>' + '<p>' + `Number of Pages: ${book.pagesNumber}` + '</p>' + '<p>' + `Already Read: ${book.alreadyRead}` + '</p>';
        bookCardsDiv.appendChild(div);
        const divBookCard = document.querySelectorAll('.book-card');

        for (let j = 0; j < 2; j++) {
            if (j === 0) {
                const cardButton = document.createElement('button');
                cardButton.classList.add(`cardButton${j}`);
                cardButton.innerHTML = `Delete book`;
                divBookCard[i].appendChild(cardButton);
            } else {
                const cardButton = document.createElement('button');
                cardButton.classList.add(`cardButton${j}`);
                cardButton.innerHTML = `Switch read status`;
                divBookCard[i].appendChild(cardButton);
            }
        }
    });
}

function styleRadioButton() {
    const radioButton1 = document.querySelector(".radioButton");
    radioButton1.addEventListener("mouseenter", (e => {
        radioButton1.classList.add("entered")
    }));
    radioButton1.addEventListener("mouseleave", (e => {
        radioButton1.classList.remove("entered")
    }));
}
