const User = require("../Model/userSchema");
const bcrypt = require("bcryptjs");
const generateToken = require("../config/generateToken");
const { requestPasswordReset, resetPassword } = require("../services/auth");
const Token = require("../Model/token");
const cloudinary = require("cloudinary").v2;

const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      mobileNo,
      dob,
    } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hanshedPassword = await bcrypt.hash(password, salt);

    const image = req.file.path;
    const imagePublicId = req.file.filename;
    const emailExist = await User.findOne({ email });

    if (emailExist) {
      await cloudinary.uploader.destroy(imagePublicId);
      res.status(409).send({ message: "User with this email already exists" });
    }

    if (password != confirmPassword) {
      await cloudinary.uploader.destroy(imagePublicId);
      res
        .status(400)
        .send({ message: "Password and Confirm password did not match" });
    }

    if (!emailExist && password === confirmPassword) {
      const newUser = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hanshedPassword,
        mobileNo: mobileNo,
        dob: dob,
        image: image,
      });
      res.send({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hanshedPassword,
        mobileNo: mobileNo,
        dob: dob,
        token: generateToken(newUser._id),
      });
    }
  } catch (error) {
    if (req.file && req.file.filename) {
      await cloudinary.uploader.destroy(req.file.filename);
    }
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).send({ message: "Email id is wrong" });
    }

    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        res.status(401).send({ message: "Password is wrong" });
      } else {
        res.status(200).send({
          user: user,
          token: generateToken(user._id),
        });
      }
    }
  } catch (error) {
    // res.status(500).send({ message: "Server Error" });
    console.log(error);
  }
};

const requestPasswordResetController = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).send({ message: "User not found" });
    }

    const requestPasswordResetService = await requestPasswordReset(email);

    return res.status(200).send(requestPasswordResetService);
  } catch (error) {
    res.status(500).send({ message: error.message });
    console.log(error.message);
  }
};

const resetPasswordController = async (req, res) => {
  try {
    const userId = req.body.userId;
    const token = req.body.token;
    const password = req.body.password;

    let passwordResetToken = await Token.findOne({ userId });
    const resetPasswordService = await resetPassword(userId, token, password);

    if (!passwordResetToken) {
      res.status(404).send({ message: "Token not found or expired" });
    }
    return res.status(200).send(resetPasswordService);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  requestPasswordResetController,
  resetPasswordController,
};
