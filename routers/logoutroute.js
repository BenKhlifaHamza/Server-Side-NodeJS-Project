const router = require("express").Router();
const logoutController = require("../controller/logoutcontroller");

router.post('/',logoutController.logoutFunction );

module.exports = router;