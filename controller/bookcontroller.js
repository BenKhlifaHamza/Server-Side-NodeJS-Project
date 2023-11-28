const bookModel = require('../model/bookmodel');

exports.getAllBooksController = async (request, response, next) => {
  try {
    const books = await bookModel.getAllBooksModel();
    response.render('products', { 
      books: books ,
      isLoggedIn : request.session.userId
      });
  } catch (error) {
    console.error('Error fetching books:', error.message);
  }
};



exports.getOneBookController = async (request, response, next) => {
  let id = request.params.id ;
  try {
    const book = await bookModel.getOneBookModel(id);
    response.render('details', { book: book,isLoggedIn : request.session.userId });
  } catch (error) {
    console.error('Error fetching book:', error.message);
  }
};