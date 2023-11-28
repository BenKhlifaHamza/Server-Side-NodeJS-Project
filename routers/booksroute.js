const bookController = require('../controller/bookcontroller');
const router = require("express").Router();

 router.get('/', bookController.getAllBooksController);
 router.get('/:id', bookController.getOneBookController);

module.exports = router;