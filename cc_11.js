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