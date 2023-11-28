var database = require('./database');
const bcrypt = require('bcrypt');

exports.postLoginModel = async (email, password , req) => {
    try {
        await database.myConnection();
        const user = await database.UserModel.findOne({ email: email });
        if (user) {
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                return user;
            } else {
                req.flash('msgErr', "Incorrect password.");
                console.log("Incorrect password.");
            }
        } else {
            req.flash('msgErr', "User not found.")
            console.log("User not found.");
        }
        await database.disconnect();
    } catch (error) {
        console.error("Error on postLoginModel :" + error.message);
    }
}; 