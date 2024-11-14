const bcrypt = require("bcrypt");
const fs = require("fs");
const dataJSON = fs.readFileSync("data/users.json");
const data = JSON.parse(dataJSON);
const logincheck = (req, res, next) => {
  const body = req.body;
  const { name, password } = body;
  const user = data.find((user) => {
    return user.name === name;
  });
  const validPassword = bcrypt.compareSync(password, user.password);
  if (validPassword) {
    next();
  } else {
    res.send("incorrect password or name");
  }
};
const signupcheck = (req, res, next) => {
  const body = req.body;
  const name = body.name;
  const existedAccount = data.find((user) => {
    return user.name === name;
  });
  console.log(existedAccount);
  if (existedAccount) {
    res.send("account existed");
  } else {
    next();
  }
};
module.exports = { logincheck, signupcheck };
