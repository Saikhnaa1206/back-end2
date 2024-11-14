const { login, signup } = require("../controller/function");
const { logincheck, signupcheck } = require("../controller/middleware");
const Route = require("express");
const userRouter = Route();
userRouter.post("/login", logincheck, login);
userRouter.post("/signup", signupcheck, signup);
module.exports = userRouter;
