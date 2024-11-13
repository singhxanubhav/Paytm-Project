import express from "express";
import zod from "zod";
import { User } from "../db";
import jwt from "jsonwebtoken";
import { JSW_SECRET } from "../config";
export const router = express.Router();

router.post("signup");

// signup and signin routes

const signupSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
  firstName: zod.string(),
  password: zod.string(),
});
router.post("signup", async (req, res) => {
  const body = req.body;
  const { success } = signupSchema.safeParse(req.body);
  if (!success) {
    return res.json({
      message: "Email allready taken / Incorect inputs",
    });
  }

  const user = User.findOne({
    username: body.username,
  });

  if (user._id) {
    return res.json({
      message: "Email allready taken / Incorect inputs",
    });
  }

  const dbUser = await User.create(body);
  const token = jwt.sign(
    {
      userId: dbUser._id,
    },
    JSW_SECRET
  )({
    message: "User created successfully",
    token: token,
  });
  res.json();
});
