import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getallUsers,
} from "../controllers/user_controller.js";

import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user you are logged in ");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user you are logged in and u can delete your account i am doing verifyuser");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin you are logged in and u can delete all accounts ");
// });


//update
router.put("/:id", verifyUser,updateUser);

//delete
router.delete("/:id",verifyUser, deleteUser);

//get
router.get("/:id",verifyUser, getUser);

//get all
router.get("/",verifyAdmin, getallUsers);

export default router;
