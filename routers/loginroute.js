const router = require("express").Router();
const loginController = require("../controller/logincontroller");
const bodyParser = require("express").urlencoded({extended : true});
const gardAuth = require("./gardauth");

router.get('/',gardAuth.authenticateUser,loginController.getLoginPageController);
router.post('/',bodyParser,loginController.postLoginController);


module.exports = router;