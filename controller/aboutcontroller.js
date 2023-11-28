exports.getAboutPageController = (request,response,next) => {
    response.render("about",{isLoggedIn : request.session.userId});
}