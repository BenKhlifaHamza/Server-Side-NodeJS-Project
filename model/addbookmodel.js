var database = require('./database');

exports.postAddBookModel = async (title, author, genre, year ,rating ,price , image, description, userId) => {
    try {
        await database.myConnection();
            const book = new database.BookModel({
                title       : title,
                description : description,
                author      : author,
                genre       : genre,
                year        : year,
                rating      : rating,
                price       : price,
                image       : image,
                userId      : userId
            });
        return  await book.save();
    } catch (error) {
        console.error('Error on postAddBookModel :', error.message);
    }finally{
        await database.disconnect();

    }
};