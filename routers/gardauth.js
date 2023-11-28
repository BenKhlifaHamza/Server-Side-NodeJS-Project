// guardAuth.js

// Middleware function to check if the user is authenticated
const authenticateUser = (req, res, next) => {
    if (req.session && req.session.userId) {
        // If the user is authenticated, redirect to the home page
        res.redirect('/');
    } else {
        // If the user is not authenticated,  continue to the next middleware or route handler
        next();
    }
};

const authorizationUser = (req, res, next) => {
    if (req.session && req.session.userId) {
        // If the user is autorizated, continue to the next middleware or route handler
        next();
    } else {
        // If the user is not autorizated, redirect to the home page 
        res.redirect('/');
    }
};



// // Middleware function to check if the user is an admin
// const isAdmin = (req, res, next) => {
//     // You need to have a way to determine if the user is an admin, here I'm assuming you have a property isAdmin in your user session
//     if (req.session && req.session.userId && req.session.isAdmin) {
//         // If the user is an admin, continue to the next middleware or route handler
//         next();
//     } else {
//         // If the user is not an admin, redirect to the unauthorized page or homepage
//         res.redirect('/unauthorized');
//     }
// };

// Export the middleware functions so that you can use them in your routes
module.exports = {
    authenticateUser,
    authorizationUser,
};
