const express = require("express");

const router = express.Router();
const authenticateUser = require("../middleware/auth");

const {
  register,
  login,
  updateUser,
} = require("../controllers/authController");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(authenticateUser, updateUser);

module.exports = router;
