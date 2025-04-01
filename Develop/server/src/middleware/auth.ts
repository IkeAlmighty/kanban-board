import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const { JWT_SECRET_KEY } = process.env;
if (!JWT_SECRET_KEY) throw Error("JWT_SECRET_KEY is not defined.");

interface JwtPayload {
  username: string;
}

function parseAuthToken(header: string | undefined) {
  if (!header || !header.startsWith('Bearer ')) return null;

  return header.split(' ')[1];
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // verify the token exists and add the user data to the request object
  const authHeader = req.headers.authorization;
  const authToken = parseAuthToken(authHeader);
  if (!authToken) {
    res.redirect("/login"); // redirects to client side login page
    return;
  }

  const user = jwt.verify(authToken, JWT_SECRET_KEY) as JwtPayload;
  if (!user) {
    res.redirect("/login"); // redirects to client side login page
    return;
  }

  req.user = user;
  next();
};
