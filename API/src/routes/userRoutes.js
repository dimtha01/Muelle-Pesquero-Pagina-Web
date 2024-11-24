import express from "express";
import { createUser, 
    deleteUser, 
    getALLusers, 
    getUserById, 
    updateUser } from "../controller/userController.js";
import validateUser from "../middleware/inputValidation.js";

const router = express.Router();

router.post("/user", validateUser,createUser);
router.get("/user", getALLusers);
router.get("/user/:id", getUserById);
router.put("/user/:id", validateUser,updateUser);
router.delete("/user/:id", deleteUser);

export default router;