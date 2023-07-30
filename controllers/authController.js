const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnAuthenticatedError } = require("../errors");

const register = async (req, res) => {
  const { username, email, password, phone, birthYear } = req.body;

  if (!username || !email || !password || !phone || !birthYear) {
    throw new BadRequestError("Please provide all values");
  }

  const userAlreadyExists = await User.findOne({ email });
  const usernameAlreadyExists = await User.findOne({ username });

  if (userAlreadyExists) {
    throw new BadRequestError("This Email already used ");
  }
  if (usernameAlreadyExists) {
    throw new BadRequestError("This username already used ");
  }

  const user = await User.create({
    username,
    email,
    password,
    phone,
    birthYear,
  });

  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      username: user.username,
      email: user.email,
      phone: user.phone,
      birthYear: user.birthYear,
    },
    token,
  });
};
const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide all values auth Controller");
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new UnAuthenticatedError("invalid  credentials");
  }
  console.log(user);

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("invalid credentials");
  }

  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token });
};

const updateUser = async (req, res) => {
  const { username, email, phone, birthYear } = req.body;
  if (!email || !username || !phone || !birthYear) {
    throw new BadRequestError("Please provide all values");
  }

  const user = await User.findOne({ _id: req.user.userId });

  user.email = email;
  user.username = username;
  user.phone = phone;
  user.birthYear = birthYear;

  await user.save();

  // various setups
  // in this case only id
  // if other properties included, must re-generate

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user,
    token,
  });
};

module.exports = { register, login, updateUser };
