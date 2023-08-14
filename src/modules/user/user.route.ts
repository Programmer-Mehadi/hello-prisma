import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello");
});
router.post("/create", UserController.insertIntoDB);

export const UserRoutes = router;
