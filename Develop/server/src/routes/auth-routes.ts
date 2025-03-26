import { Router, Request, Response } from "express";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { configDotenv } from "dotenv";

configDotenv();

const { JWT_SECRET_KEY } = process.env;
if (!JWT_SECRET_KEY) throw Error("JWT_SECRET_KEY not set");

export const login = async (req: Request, res: Response) => {
  // If the user exists and the password is correct, return a JWT token

  const { username, password } = req.body;


  const user = await User.findOne({
    where: { username },
  });


  if (!user) {
    res.status(404).json({
      error: "User does not exist with provided username.",
    });
    return;
  } else {
    const passwordValid = await bcrypt.compare(password, user.password)
    if (!passwordValid) {
      res.status(401).json({ error: 'Password is incorrect.' })
      return;
    }
  }

  const authToken = jwt.sign({ username, id: user.id }, JWT_SECRET_KEY);
  res.json({ authToken });
};

const router = Router();

// POST /login - Login a user
router.post("/login", login);

export default router;
