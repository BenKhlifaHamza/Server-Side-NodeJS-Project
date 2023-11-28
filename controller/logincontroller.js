const loginModel = require('../model/loginmodel');

exports.getLoginPageController = async (request, response, next) => {
    try {
        response.render('login',{isLoggedIn : request.session.userId , msgErr : request.flash('msgErr')[0]});
    } catch (error) {
        console.error('Error on getLoginPageController :', error.message);
    }
};

exports.postLoginController = async (request, response, next) => {
    try {
        const { email, password } = request.body;
        const user = await loginModel.postLoginModel(email, password,request);
        if (user) {
            request.session.userId = user.id;
            // Authentication successful, redirect to the homepage or user dashboard
            response.redirect('/');
        } else {
            // Authentication failed, render the login page with an error message
            //response.render('login', {isLoggedIn : request.session.userId , msgErr : request.flash('msgErr')[0]});
            response.redirect('/login') // nesta3mlo hethi wala ala fo9ha 
        }
    } catch (error) {
        console.error('Error on postLoginController :', error.message);
    }
};
