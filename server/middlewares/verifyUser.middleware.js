import {
  deleteVerificaionUsers,
  getVerificaionCode,
  updateVerificationAttempt,
  verificationAttempt,
} from "../modals/user.modal.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ErrorHandler } from "../utils/ErrorHandler.js";

const verifyOTP = asyncHandler(async (req, res, next) => {
  const { email_id, otp } = req.body;

  if (!email_id) {
    throw new ErrorHandler(400, "Email is required");
  }

  if (!otp) {
    throw new ErrorHandler(400, "otp is required");
  }

  const userAllEntries = await getVerificaionCode(email_id);

  if (userAllEntries.length === 0) {
    throw new ErrorHandler(400, "Resend OTP");
  }

  let user;

  if (userAllEntries.length > 1) {
    user = userAllEntries[0];
  } else {
    user = userAllEntries[0];
  }

  const inccoectAttemts = await verificationAttempt(email_id);

  if (inccoectAttemts[0].count > 10) {
    await deleteVerificaionUsers(email_id);

    throw new ErrorHandler(
      403,
      "Maximum verification attempts reached. Please go back and try again"
    );
  }

  if (user.otp_code !== otp) {
    await updateVerificationAttempt(user.otp_id);

    throw new ErrorHandler(401, "OTP is incorrect");
  }

  const currentTime = Date.now();
  const verificationCodeExpire = new Date(user.otp_code_expires).getTime();

  if (currentTime > verificationCodeExpire) {
    await updateVerificationAttempt(user.otp_id);

    throw new ErrorHandler(410, "OTP is Expire");
  }

  await deleteVerificaionUsers(email_id);

  next();
});

export { verifyOTP };

// const verifyOTP = asyncHandler(async (req, res, next) => {
//   const { email_id, otp } = req.body;

//   if (!email_id) {
//     throw new ErrorHandler(401, "Email is required");
//   }

//   if (!otp) {
//     throw new ErrorHandler(401, "otp is required");
//   }

//   const userAllEntries = await getVerificaionCode(email_id);

//   if (!userAllEntries?.length > 0) {
//     throw new ErrorHandler(400, "Resend OTP");
//   }

//   let user;

//   if (userAllEntries.length > 1) {
//     user = userAllEntries[0];
//   } else {
//     user = userAllEntries[0];
//   }

//   await deleteVerificaionUsers(email_id);

//   if (user.otp_code !== otp) {
//     throw new ErrorHandler(400, "Invalid OTP");
//   }

//   const currentTime = Date.now();
//   const verificationCodeExpire = new Date(user.otp_code_expires).getTime();

//   if (currentTime > verificationCodeExpire) {
//     throw new ErrorHandler(400, "OTP Expire");
//   }

//   next();
// });

