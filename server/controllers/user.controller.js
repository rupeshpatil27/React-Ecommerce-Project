import {
  findUser,
  generateAccessToken,
  generateRefreshToken,
  findUserByEmail,
  newUser,
  saveVerificationCode,
  updateRefreshToken,
  verificationAttempt,
} from "../modals/user.modal.js";

import { ApiResponse } from "../utils/ApiResponse.js";
import { ErrorHandler } from "../utils/ErrorHandler.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { otpEmailTemplate } from "../utils/EmailTemplate.js";
import { sendEmail } from "../utils/sendEmail.js";

import jwt from "jsonwebtoken";

const generateVerificationCode = async () => {
  const code = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, 0);

  return code.toString();
};

const sendVerificationCode = async (email_id, verificationCode) => {
  try {
    const message = otpEmailTemplate(verificationCode);

    const mailResponse = await sendEmail({
      email_id,
      subject: "Verification Code",
      message,
    });

    if (!mailResponse?.response) {
      throw new ErrorHandler(500, "Failed to send Email");
    }

    return;
  } catch (error) {
    throw new ErrorHandler(500, "Failed to send verification code");
  }
};

const generateAccessAndRefreshTokens = async (user_id) => {
  try {
    const accessToken = generateAccessToken(user_id);
    const refreshToken = generateRefreshToken(user_id);

    await updateRefreshToken({ refreshToken, user_id });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ErrorHandler(
      401,
      "Something went wrong while generating refresh and access token"
    );
  }
};

const userStatus = asyncHandler(async (req, res, next) => {
  const { email_id } = req.body;

  if (!email_id) {
    throw new ErrorHandler(400, "Email is required");
  }

  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const result = pattern.test(email_id);

  if (!result) {
    throw new ErrorHandler(401, "Email is Invalid");
  }

  const user = await findUserByEmail(email_id);

  let userStatus = "NOT_FOUND";

  if (user[0]) {
    userStatus = "VERIFIED";
  }

  res.status(200).json(
    new ApiResponse(
      200,
      {
        userStatus: userStatus,
      },
      userStatus
    )
  );
});

const sendOTP = asyncHandler(async (req, res, next) => {
  const { email_id } = req.body;

  if (!email_id) {
    throw new ErrorHandler(400, "Email is required");
  }

  const verificationCode = await generateVerificationCode();

  const verfication = await saveVerificationCode({
    email_id,
    verificationCode,
  });

  if (!verfication?.insertId) {
    throw new ErrorHandler(
      500,
      "Something went wrong while sending otp ,please try again."
    );
  }

  // await sendVerificationCode(email_id, verificationCode);

  res.status(200).json({
    success: true,
    message: "OTP Sent TO Your Email Address.",
  });
});

const createUser = asyncHandler(async (req, res, next) => {
  const { email_id } = req.body;

  const userExist = await findUserByEmail(email_id);

  if (userExist?.length > 0) {
    throw new ErrorHandler(
      401,
      "You are already register with us,please sign in"
    );
  }

  const userRegisterd = await newUser(email_id);

  if (!userRegisterd?.insertId) {
    throw new ErrorHandler(401, "cant register,please try again.");
  }

  const user = await findUser(userRegisterd?.insertId);

  if (!user[0]) {
    throw new ErrorHandler(
      500,
      "Something went wrong while registering process,please try again."
    );
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user[0].user_id
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: user[0],
          accessToken,
          refreshToken,
        },
        "Account Created"
      )
    );
});

const loginUser = asyncHandler(async (req, res, next) => {
  const { email_id } = req.body;

  const user = await findUserByEmail(email_id);

  if (!user[0]) {
    throw new ErrorHandler(400, "NOT_FOUND");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user[0].user_id
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: user[0],
          accessToken,
          refreshToken,
        },
        "Logged In Successfully"
      )
    );
});

const logoutUser = asyncHandler(async (req, res, next) => {
  const refreshToken = null;

  const user_id = req.user.user_id;

  await updateRefreshToken({ refreshToken, user_id });

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"));
});

const refreshAccessToken = asyncHandler(async (req, res, next) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;

  if (!incomingRefreshToken) {
    throw new ErrorHandler(401, "unauthorized request");
  }

  try {
    const decodeToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await findUser(decodeToken?.id);

    if (!user[0]) {
      throw new ErrorHandler(401, "Invalid Refresh Token");
    }

    if (incomingRefreshToken !== user[0]?.reset_password_token) {
      throw new ErrorHandler(401, "Refresh Token is expired or used");
    }

    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user[0].user_id
    );

    res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          200,
          {
            accessToken,
            refreshToken,
          },
          "Access token refreshed"
        )
      );
  } catch (error) {
    throw new ErrorHandler(401, error?.message || "Invalid Refresh token");
  }
});

const getCurrentUser = asyncHandler(async (req, res, next) => {
  const user = req.user;

  res.status(200).json(new ApiResponse(200, user, "loged in user"));
});

export {
  userStatus,
  sendOTP,
  createUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  getCurrentUser,
};
