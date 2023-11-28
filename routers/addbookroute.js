const router = require("express").Router();
const addBookController = require("../controller/addbookcontroller");
const gardAuth = require("./gardauth");
const functions = require("../functions/multerfunction");

router.get('/', gardAuth.authorizationUser, addBookController.getAddBookPageController);
router.post('/', functions.multerFunction('assets/books','image'), gardAuth.authorizationUser, addBookController.postAddBookPageController);


module.exports = router;