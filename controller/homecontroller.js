const homeModel = require('../model/homemodel');

exports.getHomeBooksController = async (request, response, next) => {
  try {
    const books = await homeModel.getHomeBooksModel();
    response.render('index', { 
      books: books,
      isLoggedIn : request.session.userId
    });
  } catch (error) {
    console.error('Error fetching books:', error.message);
  }
};
  
// exports.bookController =  (request,response,next)=>{ 
//     homeModel.getAllBooks().then(books => {
//         response.render('index', {books : books});
//     })
// }