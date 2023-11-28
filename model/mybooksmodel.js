var database = require('./database');

/**************GET ALL MY BOOKS****************/
exports.getMyBooksModel = async (userId) => {
    try {
        await database.myConnection();
        const myBooks = await database.BookModel.find({ "userId": userId });
        await database.disconnect();
        return myBooks;
    } catch (error) {
        await database.disconnect();
        console.error("Error on getMyBooksModel :" + error.message);
    }
}

/**************GET BOOK FOR UPDATE****************/
exports.getUpdateBookModel = async (bookId) => {
    try {
        await database.myConnection();
        const book = await database.BookModel.findById(bookId);
        await database.disconnect();
        return book;
    } catch (error) {
        await database.disconnect();
        console.error("Error on geUpdateBookModel :" + error.message);
    }
}

/**************UPDATE ONE BOOK****************/
exports.updateBookModel = async (bookId, title, author, genre, year ,rating ,price , image, description) => {
    try {
        await database.myConnection();
        const book = await database.BookModel.updateOne({ _id: bookId } , {
            title       : title,
            description : description,
            author      : author,
            genre       : genre,
            year        : year,
            rating      : rating,
            price       : price,
            image       : image,
        })
        await database.disconnect();
        return book;
    } catch (error) {
        await database.disconnect();
        console.error("Error on updateBookModel :" + error.message);
    }
}

/**************DELETE ONE BOOK****************/
exports.deleteMyBooksModel = async (bookId) => {
    try {
        await database.myConnection();
        const result = await database.BookModel.deleteOne({ _id: bookId });
            return result.deletedCount > 0;
    } catch (error) {
        console.error("Error on deleteMyBooksModel :" + error.message);
    } finally {
        await database.disconnect();
    }
};