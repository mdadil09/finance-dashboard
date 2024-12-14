const User = require("../Model/userSchema");

const validation = async (req, res) => {
  const { email, password, confirmPassword } = req.body;
  console.log(typeof req.body);

  console.log(req.body);

  console.log("email:", email);
  console.log("password:", password);
  console.log("confirmPassword:", confirmPassword);

  const emailExist = await User.findOne({ email });
  if (emailExist) {
    return res.status(400).send({ message: "Email Id already exists" });
  }

  if (password !== confirmPassword) {
    return res.status(400).send({ message: "Passwords do not match" });
  }
};

const userExists = async (req, res, next) => {
  if (validation(req, res)) next();
};

module.exports = userExists;
