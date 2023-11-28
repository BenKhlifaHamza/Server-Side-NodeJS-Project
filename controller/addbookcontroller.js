const addBookModel = require('../model/addbookmodel');

exports.getAddBookPageController = (request, response, next) => {
    try {
    response.render('addbook',{ isLoggedIn : request.session.userId});
} catch (error) {
    console.error('Error on getAddBookPageasync :', error.message);
    }
}

exports.postAddBookPageController = async (request, response, next) => {
    const title       =  request.body.title;
    const author      = request.body.author;
    const genre       = request.body.genre;
    const year        = Number(request.body.year);
    const rating      = Number(request.body.rating);
    const price       = Number(request.body.price);
    const image       = request.file.filename;
    const description = request.body.description;
    const userId      = request.session.userId;
    try {
        // console.log("***************************");
        // console.log(request.body);
        // console.log(request.file); 
const book =  await  addBookModel.postAddBookModel(title, author, genre, year ,rating ,price , image, description, userId)
        if(book){
            response.redirect('/mybooks');
        }
} catch (error) {
    console.error('Error on postAddBookPageController :', error.message);
    }
}