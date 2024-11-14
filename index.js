const express = require("express");
const userRouter = require("./routes/userRouter");
const app = express();

app.use(express.json());
app.use("/user", userRouter);

app.listen(8080, console.log("Your server is running in 8080"));
