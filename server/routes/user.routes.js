import { Router } from "express";
import {
  createUser,
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  sendOTP,
  userStatus,
} from "../controllers/user.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import { verifyOTP } from "../middlewares/verifyUser.middleware.js";

const router = Router();

router.route("/userstatus").post(userStatus);
router.route("/sendotp").post(sendOTP);
router.route("/createuser").post(verifyOTP, createUser);
router.route("/login").post(verifyOTP, loginUser);
router.route("/logout").post(verifyJWT, logoutUser);
router.route("/refresh-token").post(refreshAccessToken);

router.route("/me").get(verifyJWT, getCurrentUser);

export default router;
