

exports.logoutFunction = (request, response, next) => {
    request.session.destroy(() => {
        console.log('Cookie destroyed.');
        response.redirect('/login');
        // response.render('login', { isLoggedIn: false });
    });
}