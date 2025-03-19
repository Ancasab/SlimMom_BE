const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { RequestError } = require("../helpers");
const { registerSchema, loginSchema } = require("../schemas/auth");
require("dotenv").config();

const { TOKEN_KEY, TOKEN_LIFE_TIME } = process.env;

const register = async (req, res, next) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) {
      throw RequestError(400, error.message);
    }
    const { name, email, password } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw RequestError(409, "Email in use");
    }
    console.log('Register Request:', { name, email, password });

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log('Hashed Password:', hashedPassword);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    console.log('User Created:', user);

    res.status(201).json({
      user: {
        name: user.name,
        email: user.email,
        _id: user.id
      },
    });
  } catch (error) {
    console.error('Error creating user:', error);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) {
      throw RequestError(400, error.message);
    }
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      throw RequestError(403, "Email or password is wrong");
    }
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordValid) {
      throw RequestError(403, "Email or password is wrong");
    }

    const payload = { id: existingUser._id };
    const token = jwt.sign(payload, TOKEN_KEY, { expiresIn: TOKEN_LIFE_TIME });
    await User.findByIdAndUpdate(existingUser._id, { token });
    
    res.json({
      token,
      user: {
        name: existingUser.name,
        email: existingUser.email,
        height: existingUser.height,
        age: existingUser.age,
        currentWeight: existingUser.currentWeight,
        desiredWeight: existingUser.desiredWeight,
        bloodType: existingUser.bloodType,
        dailyRate: existingUser.dailyRate,
        notRecFood: existingUser.notRecFood,

      },
    });
  } catch (error) {
    next(error);
  }
};

const logout = async (req, res, next) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { token: "" });
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login, logout };
