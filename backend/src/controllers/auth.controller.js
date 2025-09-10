const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
async function registerController(req, res) {
  const { username, password } = req.body;
  const isUserAlreadyExist = await userModel.findOne({
    username,
  });
  if (isUserAlreadyExist) {
    return res.status(409).json({
      message: "Username already exist!",
    });
  }

  const user = await userModel.create({
    username,
    password: await password.hash(password, 10),
  });
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );

  res.cookie("token", token);
  res.status(201).json({
    message: " User created successfully.",
    user,
  });
}

async function loginController(req, res) {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username,
  });

  if (!username) {
    return res.status(400).json({
      message: "User d found",
    });
  }
  const isPasswordValid = user.password === password;

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid password",
    });
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("token", token);
  res.status(201).json({
    message: "User login successfully",
  });
}

module.exports = {
  registerController,
  loginController,
};
