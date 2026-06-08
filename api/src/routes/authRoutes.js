
// PUBLIC ROUTES projelerde frontend de olması şart. 
// admin yönetimini bu projede seedAdmin.js ile yapacağız.

import express from "express";
import { register, login } from "../controllers/authContoller.js";


const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;

