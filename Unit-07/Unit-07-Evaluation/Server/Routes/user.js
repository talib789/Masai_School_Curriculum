const express = require("express");
const userRouter = express.Router();

const { register, login } = require("../handlers/user");

userRouter.post("/Register", register);
userRouter.post("/Register/login", login);

module.exports = userRouter;

