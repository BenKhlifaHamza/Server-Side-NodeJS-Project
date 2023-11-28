const aboutcontroller = require('../controller/aboutcontroller');
const router = require("express").Router();

router.get('/', aboutcontroller.getAboutPageController);

module.exports = router;