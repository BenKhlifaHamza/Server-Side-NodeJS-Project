const router = require("express").Router();
const myBooksController = require("../controller/mybookscontroller");
const gardAuth = require("./gardauth");
const functions = require("../functions/multerfunction");

router.get('/',gardAuth.authorizationUser,myBooksController.getMyBooksPageController);
router.post('/delete/:id',gardAuth.authorizationUser, myBooksController.deleteMyBookController);
router.get('/update/:id',gardAuth.authorizationUser, myBooksController.getUpdateBookPageController);
router.post('/update/:id', functions.multerFunction('assets/books','image'), gardAuth.authorizationUser, myBooksController.updateBookController);

module.exports = router;