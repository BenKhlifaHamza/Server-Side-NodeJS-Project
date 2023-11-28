const homeController = require('../controller/homecontroller');
const router = require("express").Router();

router.get('/', homeController.getHomeBooksController);

module.exports = router;