const mongoose = require("mongoose");

// URL to establish a database connection
const myUrl = "mongodb://127.0.0.1:27017/education";

// Function to establish a database connection
exports.myConnection = async () => {
    try {
        await mongoose.connect(myUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connection to the database successful!");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
        throw error;
    }
};

// Function to disconnect a database 
exports.disconnect = async () => {
    try {
        await  mongoose.disconnect();
        console.log("Disconnected successful!");
    } catch (error) {
        console.error("Error Disconnected the database:", error.message);
    }
};
////////////////////////////////////////////////////////////////////////////////////////



/***************************************BOOK*******************************************/
// Define the book schema
const bookSchema = mongoose.Schema({
    title       : String,
    description : String,
    author      : String,
    genre       : String,
    year        : Number,
    rating      : Number,
    price       : Number,
    image       : String,
    userId      : String
});
// Create the Book model
const BookModel = mongoose.model("book", bookSchema);
// Export the Book model
exports.BookModel = BookModel;
/****************************************************************************************/


/***************************************USER*******************************************/
// Define the user schema
const userSchema = mongoose.Schema({
    userName : String,
    email    : String,
    password : String,
});
// Create the user model
const UserModel = mongoose.model("user", userSchema);
// Export the user model
exports.UserModel = UserModel;
/****************************************************************************************/




