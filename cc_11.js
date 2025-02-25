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
