const express = require("express");
const {
  register,
  login,
  requestPasswordResetController,
  resetPasswordController,
} = require("../controllers/user");

const router = express.Router();

router.post("/login", login);
router.post("/requestPasswordReset", requestPasswordResetController);
router.post("/resetPassword", resetPasswordController);

module.exports = router;
