console.log(`Hello World!`);

let myLibrary = [];
inputArray = [`#input-book-title`, `#input-book-author`, `#input-page-number`, `#input-language`, `#read-or-not`];
const addBookButton_DOM = document.querySelector(`#add-book-button`);
const closePopupButton_DOM = document.querySelector(`#popup-close`);
const sumbitButton_DOM = document.querySelector(`#submit-button`);
const clearButton_DOM = document.querySelector(`#clear-button`);
const input_DOM = inputArray.map((dom_id) => document.querySelector(dom_id));

addBookButton_DOM.addEventListener(`click`, () => {
    console.log(`Popup has been opened!`)
    document.querySelector(`#pop-up`).style.display = `flex`;
});

closePopupButton_DOM.addEventListener(`click`, () => {
    console.log(`Popup has been closed!`)
    document.querySelector(`#pop-up`).style.display = `none`;
})

sumbitButton_DOM.addEventListener(`click`, () => {
    addBookToLibary();
    let bookIndex = myLibrary.length - 1;
    console.log(`Book ${bookIndex} has been submitted!`);
});

clearButton_DOM.addEventListener(`click`, () => {
    console.log(`Cleared all fields!`)
    clearAllField();
})

function bookConstructor (title, author, page, language, readOrNot) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.language = language;
    this.readOrNot = readOrNot;
};

let addBookToLibary = () => {
    const title = document.getElementById(`input-book-title`).value;
    const author = document.getElementById(`input-book-author`).value;
    const page = document.getElementById(`input-book-page`).value;
    const language = document.getElementById(`input-book-language`).value;
    // convert string to boolean
    const readOrNot = (document.getElementById(`select-read-or-not`).value === 'true');
    myLibrary.push(new bookConstructor(title, author, page, language, readOrNot));
    displayBooksOnPage();
    document.querySelector(`#pop-up`).style.display = `none`;
};

let displayBooksOnPage = () => {
    const main_DOM = document.getElementById(`main`);
    myLibrary.forEach((card) => {
        let bookIndex = myLibrary.length - 1;
        const bookCard_DOM = document.createElement(`div`);
        bookCard_DOM.classList.add(`book-card`);
        const removeButton_DOM = document.createElement(`img`);
        removeButton_DOM.classList.add(`remove-book-button`);
        removeButton_DOM.src = `./resources/close-circle-outline.png`;
        const bookCardTitle_DOM = document.createElement(`h3`);
        bookCardTitle_DOM.classList.add(`book-card-title`);
        bookCardTitle_DOM.textContent = myLibrary[bookIndex].title;
        const bookCardAuthorLabel_DOM = document.createElement(`p`);
        bookCardAuthorLabel_DOM.classList.add(`book-card-label`);
        bookCardAuthorLabel_DOM.textContent = `Author: `;
        const bookCardAuthor_DOM = document.createElement(`p`);
        bookCardAuthor_DOM.classList.add(`book-card-author`, `book-card-value`);
        bookCardAuthor_DOM.textContent = myLibrary[bookIndex].author;
        const bookCardPageLabel_DOM = document.createElement(`p`);
        bookCardPageLabel_DOM.classList.add(`book-card-label`);
        bookCardPageLabel_DOM.textContent = `Pages: `;
        const bookCardPage_DOM = document.createElement(`p`);
        bookCardPage_DOM.classList.add(`book-card-page`, `book-card-value`);
        bookCardPage_DOM.textContent = myLibrary[bookIndex].page;
        const bookCardLanguageLabel_DOM = document.createElement(`p`);
        bookCardLanguageLabel_DOM.classList.add(`book-card-label`);
        bookCardLanguageLabel_DOM.textContent = `Language: `;
        const bookCardLanguage_DOM = document.createElement(`p`);
        bookCardLanguage_DOM.classList.add(`book-card-language`, `book-card-value`);
        bookCardLanguage_DOM.textContent = myLibrary[bookIndex].language;
        // checkbox
        const toggleContainer_DOM = document.createElement(`div`);
        toggleContainer_DOM.classList.add(`toggle-container`);
        const toggleP_DOM = document.createElement(`p`);
        toggleP_DOM.classList.add(`toggle-p`);
        toggleP_DOM.textContent = `Mark as read`;
        const switchLabel_DOM = document.createElement(`label`);
        const checkBox_DOM = document.createElement(`input`);
        checkBox_DOM.type = `checkbox`;
        checkBox_DOM.checked = myLibrary[bookIndex].readOrNot;
        console.log(typeof myLibrary[bookIndex].readOrNot);
        checkBox_DOM.addEventListener(`change`, () => {
            if (checkBox_DOM.checked === true) {
                myLibrary[bookIndex].readOrNot = true;
                console.log(`book ${bookIndex} is read!`);
            } else if (checkBox_DOM.checked === false) {
                myLibrary[bookIndex].readOrNot = false;
                console.log(`book ${bookIndex} is not read!`);
            };
        });

        const span_DOM = document.createElement(`span`);
        main_DOM.append(bookCard_DOM);
        bookCard_DOM.append(removeButton_DOM, bookCardTitle_DOM, bookCardAuthorLabel_DOM, bookCardAuthor_DOM, 
            bookCardPageLabel_DOM, bookCardPage_DOM, bookCardLanguageLabel_DOM, bookCardLanguage_DOM, toggleContainer_DOM);
        toggleContainer_DOM.append(toggleP_DOM, switchLabel_DOM);
        switchLabel_DOM.append(checkBox_DOM, span_DOM);

        removeButton_DOM.addEventListener(`click`, () => {
            myLibrary.splice(bookIndex);
            console.log(`book ${bookIndex} has been removed from the array`);
            main_DOM.removeChild(bookCard_DOM);
        });
        
    });
};
