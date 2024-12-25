import user from '../models/userModel.js'
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const Signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password,  10);
    const newUser = await user.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await user.findOne({ email });
    if (!users) {
      return res.status(404).json(`cannot find ${email}`);
    }
    const isMatch = await bcrypt.compare(password, users.password);
    if (!isMatch) {
        return res.status(400).json({message: `Password is Incorrect`});
    }
    const token = jwt.sign({id:users._id, role:users.role}, process.env.JWT_secret, {expiresIn: "1h"})
    res.status(200).json({ token, role: users.role })
  } catch (error) {
    console.error("Error in Login controller:", error);
    res.status(500).json(`something is wrong with ${email || "email"}`);
  }
};
