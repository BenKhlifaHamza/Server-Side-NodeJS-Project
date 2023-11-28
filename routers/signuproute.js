const router = require("express").Router();
const signup = require("../controller/signupcontroller");
const bodyParser = require("express").urlencoded({extended : true});
const gardAuth = require("./gardauth");

router.get('/',gardAuth.authenticateUser,signup.getSignupPageController );
router.post('/',bodyParser,signup.postSignupController );
module.exports = router;