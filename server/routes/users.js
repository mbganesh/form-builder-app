var express = require("express");
var router = express.Router();
var UserModel = require("../model/userSchema");
var FormModel = require("../model/formSchema");
const { default: mongoose } = require("mongoose");

router.get("/", function (req, res, next) {
  res.send("api works");
});

router.post("/signin", async function (req, res, next) {
  const reqData = req.body;

  let findQuery = { email: reqData.email, password: reqData.password };

  const user = await UserModel.findOne(findQuery);

  if (!user) {
    return res.json({
      status: false,
      message: "Invalid username or password",
    });
  }

  return res.json({
    status: true,
    message: "Successfully logged in",
    data: { _id: user._id },
  });
});

router.post("/signup", async function (req, res, next) {
  const reqData = req.body;
  console.table(reqData);
  let findQuery = { email: reqData.email };

  const isUserExist = await UserModel.findOne(findQuery);
  console.log(isUserExist, "found");
  if (isUserExist) {
    return res.json({
      status: false,
      message: "Email Address already exists",
    });
  }

  let storeData = {
    email: reqData.email,
    password: reqData.password,
    userName: reqData.userName,
  };
  const StoredUser = await UserModel.create(storeData);
  StoredUser.save()
    .then((result) => {
      return res.json({
        status: true,
        message: "Successfully registered ",
        data: {
          _id: result._id,
        },
      });
    })
    .catch((err) => {
      return res.json({ status: false, message: "Something went wrong" });
    });
});

router.post("/create-form", async function (req, res, next) {
  const reqData = req.body;
  console.table(reqData);

  let storeData = {
    userId: reqData.userId,
    title: reqData.title,
    description: reqData.description,
  };

  const StoredUser = await FormModel.create(storeData);

  StoredUser.save()
    .then((result) => {
      return res.json({
        status: true,
        message: "Successfully Created a form",
        data: {
          _id: result._id,
        },
      });
    })
    .catch((err) => {
      return res.json({ status: false, message: "Something went wrong" });
    });
});

router.get("/form-list", async function (req, res, next) {
  const id = req.query.userId;

  let findQuery = { userId: new mongoose.Types.ObjectId(id) };
  const forms = await FormModel.find(findQuery);
  return res.json({ status: true, message: "FormList", data: forms });
});

router.post("/get-single-form", async function (req, res, next) {
  const reqData = req.body;
  let findQuery = { _id: new mongoose.Types.ObjectId(reqData._id) };
  const form = await FormModel.findOne(findQuery);

  if (!form) {
    return res.json({
      status: false,
      message: "No data found for form",
    });
  }

  return res.json({
    status: true,
    message: "Single Form Data",
    data: form,
  });
});

router.post("/update-form", async function (req, res, next) {
  const reqData = req.body;

  let findQuery = { _id: new mongoose.Types.ObjectId(reqData._id) };
  let updateQuery = {
    $set: {
      formDetail: reqData.formDetail,
    },
  };
  let options = { upsert: true };
  const updateForm = await FormModel.findOneAndUpdate(
    findQuery,
    updateQuery,
    options
  );
  return res.json({
    status: true,
    message: "Form was updated successfully",
  });
});

module.exports = router;
