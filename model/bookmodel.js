var database = require('./database');

/**************GET ALL BOO****************/
exports.getAllBooksModel = async () => {
  try {
    await database.myConnection();
    const books = await database.BookModel.find({});
    await database.disconnect();
    return books;
  } catch (error) {
    await database.disconnect();
    console.error("Error on getAllBooksModel :" + error.message);
  }
};



/**************GET BOOK BY ID****************/
exports.getOneBookModel = async (id) => {
  try {
    await database.myConnection();  
    const book = await database.BookModel.findById(id);
    await database.disconnect();
    return book;
  } catch (error) {
    await database.disconnect();
    throw error;
  }
};