const signupModel = require('../model/signupmodel');

exports.getSignupPageController = async (request, response, next) => {
  try {
    response.render('signup', { isLoggedIn: request.session.userId, msgErr: request.flash('msgErr')[0] });
  } catch (error) {
    console.error('Error on : getSignupPageController', error.message);
  }
};


exports.postSignupController = async (request, response, next) => {
  try {
    const user = await signupModel.postSignupModel(request.body.userName, request.body.email, request.body.password, request, request);
    if (user) {
      response.render('login', { isLoggedIn: request.session.userId });
    } {
      response.redirect('/signup');
    }
  } catch (error) {
    console.error('Error on postSignupController :', error.message);
  }
};