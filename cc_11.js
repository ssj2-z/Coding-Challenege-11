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
