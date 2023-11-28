const contactcontroller = require('../controller/contactcontroller');
const router = require("express").Router();

router.get('/', contactcontroller.getContactPageController);

module.exports = router;