import express from "express";
import { signup, login ,logout } from "../controlllers/auth.controller.js";

const router = express.Router();

router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);








// const router = express.Router();

// router.post("/login", login);

// router.post("/logout", logout);

// router.post("/singup", singup );



export default router;
