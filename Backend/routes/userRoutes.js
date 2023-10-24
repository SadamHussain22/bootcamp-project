 import express from "express";
const router = express.Router();
import { registerUser,changePassword,forgotPassword  } from "../controllers/registerUser.js";
import{ login} from "../controllers/userlogin.js";
import{createCartItem,getAllCartItems,updateCartItem,deleteCartItem} from "../controllers/carddata.js";
import {authenticatUser} from "../middlewares/authMiddleware.js"
import { validateInput } from "../middlewares/validationMiddleware.js";
router.post("/changePassword",authenticatUser, changePassword);
router.post("/forgotPassword ", forgotPassword );
router.post("/registerUser",validateInput, registerUser );
router.post("/login", login);
router.post("/createCartItem",createCartItem);
router.get("/getAllCartItems",getAllCartItems);
router.put("/updateCartItem",updateCartItem);
router.delete("/deleteCartItem",deleteCartItem);
export default router;
