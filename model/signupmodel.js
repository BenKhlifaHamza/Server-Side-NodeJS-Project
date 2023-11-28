var database = require('./database');
const bcrypt = require('bcrypt');

exports.postSignupModel = async (userName, email, password , req) => {
  try {
    await database.myConnection();
    const verifUser = await database.UserModel.findOne({ email: email });
    if (!verifUser) {
      const passwordCrypte = await bcrypt.hash(password, 9);
      const user = new database.UserModel({
        userName: userName,
        email: email,
        password: passwordCrypte,
      });
    return await user.save();
    } else {
      req.flash('msgErr', "E-mail already exists.")
      console.error("E-mail already exists.");
    }
    await database.disconnect();
  } catch (error) {
    console.error('Error on postSignupModel :', error.message);
  }
};





