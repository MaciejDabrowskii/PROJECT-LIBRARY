// let button = document.getElementById("btn");
let myLibrary = [];
const openBtn = document.getElementById("open");
const overlay = document.getElementById("overlay")

openBtn.addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.classList.add('active');
    overlay.classList.add('active');
    }
);

// button.addEventListener("click", ()=> {
//     let title = document.getElementById("inputTitle").value;
//     let author = document.getElementById("inputAuthor").value;
//     let pagesNumber = document.getElementById("inputNumber").value;
//     const book = new Book(title, author, pagesNumber)
//     myLibrary.push(book);
// });




// function Book(title, author, pagesNumber, alreadyRead) {
//     this.title = title
//     this.author = author
//     this.pagesNumber = pagesNumber
//     this.alreadyRead = alreadyRead
//     this.info = function() {
//      return (`${title} by ${author}, ${pagesNumber} pages, ${alreadyRead}.`)
//     }
//   }
