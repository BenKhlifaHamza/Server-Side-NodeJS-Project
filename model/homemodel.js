var database = require('./database');

/**************GET Home Books****************/
exports.getHomeBooksModel = async () => {
  try {
    await database.myConnection();
    const books = await database.BookModel.find({}).limit(6);
    await database.disconnect();
    return books;
  } catch (error) {
    await database.disconnect();
    console.error("Error on getHomeBooksModel :" + error.message);
  }
};

/**************GET ALL Books****************/
// exports.getAllBooks = ()=>{
// return new Promise ((resolve, reject) =>{
//     mongoose.connect(myUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then( () => {
//        return  BookModel.find({});
//     }).then(books=>{
//         mongoose.disconnect();
//         resolve(books);
//     }).catch(error=>reject(error));
// })
// }