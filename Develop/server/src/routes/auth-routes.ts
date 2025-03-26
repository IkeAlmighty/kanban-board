import { Router, Request, Response } from "express";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const { JWT_SECRET_KEY } = process.env;
if (!JWT_SECRET_KEY) throw Error("JWT_SECRET_KEY not set");

export const login = async (req: Request, res: Response) => {
  // If the user exists and the password is correct, return a JWT token

  const { username, password } = req.body;

  // following the same hash as models.user instance method
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = User.findOne({
    where: { username, password: hashedPassword },
  });

  if (!user) {
    res.status(404).json({
      error: "User does not exist with provided username and password.",
    });
    return;
  }

  const authToken = jwt.sign(user, JWT_SECRET_KEY);
  res.json({ authToken });
};

const router = Router();

// POST /login - Login a user
router.post("/login", login);

export default router;
