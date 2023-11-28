exports.getContactPageController = (request , response , next)=>{
    response.render("contact",{isLoggedIn : request.session.userId});
}