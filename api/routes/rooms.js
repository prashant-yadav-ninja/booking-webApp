import express from "express";
import {verifyAdmin} from "../utils/verifyToken.js"
import { createRoom,updateRoom,deleteRoom,getRoom,getallRooms } from "../controllers/room_controller.js";

const router = express.Router();

//create
router.post("/:hotelid", verifyAdmin, createRoom);

//update
router.put("/:hotelid", verifyAdmin, updateRoom);

//delete
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

//get
router.get("/:id", getRoom);

//get all
router.get("/", getallRooms);

export default router;
