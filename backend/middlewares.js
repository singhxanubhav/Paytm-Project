import { JSW_SECRET } from "./config";
import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
};

if (!authHeader || !authHeader.startsWith("Bearer ")) {
  return res.status(403).json({});
}

const token = authHeader.split(" ")[1];

try {
  const decoded = jwt.verify(token, JSW_SECRET);
  if (decoded.userId) {
    res.userId = decoded.userId;
    next();
  }

  
} catch (err) {
  return res.status(403).json({});
}
