import { User } from "@prisma/client";
import { Request, Response } from "express";
import { userService } from "./user.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await userService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (e) {
    res.send({
      success: false,
      message: "Something went wrong",
      data: e,
    });
  }
};

export const UserController = {
  insertIntoDB,
};
