var express = require("express");
var router = express.Router();
var UserModel = require("../model/userSchema");
var FormModel = require("../model/formSchema");

router.get("/", function (req, res, next) {
  res.send("api works");
});

router.post("/login", function (req, res, next) {
  const reqData = req.body;

  let findQuery = { email: reqData.email, password: reqData.password };

  const user = UserModel.findOne(findQuery);

  if (!user) {
    return res.json({
      status: false,
      message: "Invalid username or password",
    });
  }

  return res.json({ status: true, message: "Successfully logged in" });
});


router.post("/login", function (req, res, next) {
  const reqData = req.body;

  let findQuery = { email: reqData.email};

  const isUserExist = UserModel.findOne(findQuery);

  if (isUserExistuser) {
    return res.json({
      status: false,
      message: "Email Address already exists",
    });
  }


  let storeData = { email : reqData.email , password : reqData.password , userName : reqData.userName}
  const StoredUser = UserModel.create(storeData);

  return res.json({ status: true, message: "Successfully registered " });
});

module.exports = router;
