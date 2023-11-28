const myBooksModel = require('../model/mybooksmodel');

exports.getMyBooksPageController = async (request, response, next) => {
    const userId = request.session.userId;
    try {
        const myBooks = await myBooksModel.getMyBooksModel(userId)
        response.render('mybooks', {
            books: myBooks,
            isLoggedIn: request.session.userId
        });
    } catch (error) {
        console.error('Error on getMyBooksPageController :', error.message);
    }
}


exports.getUpdateBookPageController = async (request, response, next) => {
    const bookId = request.params.id;
    try {
        const book = await myBooksModel.getUpdateBookModel(bookId)
        response.render('update', {
            book: book,
            isLoggedIn: request.session.userId
        });
    } catch (error) {
        console.error('Error on getUpdateBookPageController :', error.message);
    }
}


exports.deleteMyBookController = async (request, response, next) => {
    const bookId = request.params.id;
    try {
        const isDeleted = await myBooksModel.deleteMyBooksModel(bookId);
        if (isDeleted) {
            response.redirect("/mybooks");
        } else {
            response.status(404).send("Book not found.");
        }
    } catch (error) {
        console.error('Error on deleteMyBookController:', error.message);
        response.status(500).send("Error deleting the book.");
    }
};


exports.updateBookController = async (request, response, next) => {
    const bookId      = request.params.id;
    const title       = request.body.title;
    const author      = request.body.author;
    const genre       = request.body.genre;
    const year        = Number(request.body.year);
    const rating      = Number(request.body.rating);
    const price       = Number(request.body.price);
    const description = request.body.description;

    if (request.file) {
        image = request.file.filename;
    } else {
        const book = await myBooksModel.getUpdateBookModel(bookId);
        image = book.image;
    }

    try {
        const isUpdated = await myBooksModel.updateBookModel(bookId, title, author, genre, year ,rating ,price , image, description);
        if (isUpdated) {
            response.redirect("/mybooks");
        } else {
            response.status(404).send("Updating failure, Book not found.");
        }
    } catch (error) {
        console.error('Error on updateBookController:', error.message);
        response.status(500).send("Error updating the book.");
    }
};