// Task 1 Creating a book of classes
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title; this.author = author; this.isbn = isbn; this.copies = copies;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }

    updateCopies(quantity) {
        this.copies += quantity;
    }
}

// Task 2 Creating a borrower classes
class Borrower {
    constructor(name, borrowerId) {
        this.name = name; this.borrowerId = borrowerId; this.borrowedBooks = [];
    }

    borrowBook(book) {
        this.borrowedBooks.push(book.title);
    }

    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book.title);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
        }
    }

    getBorrowedBooks() {
        return this.borrowedBooks.join(', ');
    }
}

// Task 3 Class Library
class Library {
    constructor() {
        this.books = []; this.borrowers = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    addBorrower(borrower) {
        this.borrowers.push(borrower);
    }

    findBookByTitle(title) {
        return this.books.find(book => book,title === title);
    }

    findBorrowerById(borrowerId) {
        return this.borrowers.find(borrower => borrower.borrowerId === borrowerId);
    }

    borrowBook(borrowerId, bookTitle) {
        const borrower = this.findBorrowerById(borrowerId);
        const book = this.findBookByTitle(bookTitle);

        if (borrower && book && book.copies > 0) {
            borrower.borrowBook(book); book.updateCopies(-1);
            console.log(`${borrower.name} borrowed "${book.title}"`);
        } else {
            console.log(`Cannot borrow "${bookTitle}". It may not be available or the borrower ID is incorrect.`);
        }
    }

    returnBook(borrowerId, bookTitle) {
        const borrower = this.findBorrowerById(borrowerId);
        const book = this.findBookByTitle(bookTitle);

        if (borrower && book) {
            borrower.returnBook(book);
            book.updateCopies(1);
            console.log(`${borrower.name} returned "${book.title}"`);
        } else {
            console.log(`Cannot return "${bookTitle}". It may not be borrowed or the borrower ID is incorrect.`);
        }
    }
}

// Task 4 Implementing Book Borrowing
class Library { //Creates Library class
    addBorrower(borrower){ // adds a method to add borrowers to library
        this.borrowers.push(borrower);
    }
    lendBook(borrowerId, isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId);

        if (book && borrower && book.copies > 0) { // checks conditions to lend book
            book.updateCopies(-1); // removes 1 from stock
            borrower.borrowBook(book.title);        
        } else {
            console.log("Cannot lend book.")
        }
    }

// Task 5 Implementing Book Returns
returnBook(borrowerId, isbn) {
    const book = this.books.find(book => book.isbn === isbn);
    const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId);
    if (book && borrower) { // checks conditions to return book
        book.updateCopies(1); // adds 1 to stock
        borrower.returnBook(book.title);
    }
}
}

// Task 1 Test Cases
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5); // makes a new book
console.log(book1.getDetails()); // logs details of the book
book1.updateCopies(-1); // removes 1 from copies
console.log(book1.getDetails()); // logs details of the book

// Task 2 Test Cases
const borrower1 = new Borrower("Alice Johnson", 201); // makes new borrower
borrower1.borrowBook("The Great Gatsby"); // adds book to borrower array
console.log(borrower1.borrowedBooks); // logs array of borrowed books
borrower1.returnBook("The Great Gatsby"); // remove book from borrower array
console.log(borrower1.borrowedBooks); // logs array of borrowed books

// Task 3 Test Cases
const library = new Library(); // makes library constant
library.addBorrower(borrower1); // adds borrower1 to library
library.addBook(book1); // adds book1 to library
library.listBooks(); // logs each book in library

// Task 4: Implementing Book Borrowing
// Task 4 Test Cases
library.lendBook(201, 123456); // lends book isbn 123456 to borrowerID 201
console.log(book1.getDetails()); // logs book details. copies is one less
console.log(borrower1.borrowedBooks); // logs borrowers borrowed books

// Task 5: Implementing Book Returns
// Task 5 Test Cases
library.returnBook(201, 123456); // returns book
console.log(book1.getDetails()); // logs book details
console.log(borrower1.borrowedBooks);
