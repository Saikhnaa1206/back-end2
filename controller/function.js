const bcrypt = require("bcrypt");
const fs = require("fs");
const dataJSON = fs.readFileSync("data/users.json");
const data = JSON.parse(dataJSON);

const login = (req, res) => {
  res.send("Done");
};

const signup = (req, res) => {
  const body = req.body;
  const { name, password } = body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = {
    name,
    password: hashedPassword,
  };
  const idGenerator = () => {
    return Math.floor(Math.random() * 1000);
  };
  data.push({ ...user, id: idGenerator() });
  fs.writeFileSync("data/users.json", JSON.stringify(data), (err) => {
    if (err) console.log(err);
  });
  res.send(user);
};
module.exports = { login, signup };
