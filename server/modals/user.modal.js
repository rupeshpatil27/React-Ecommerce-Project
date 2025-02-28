import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { ErrorHandler } from "../utils/ErrorHandler.js";
import { asyncHandler } from "../utils/asyncHandler.js";

import { databaseInstance } from "../database/database.js";

const newUser = async (userData) => {
  const query =
    "INSERT INTO user_master SET user_role_id=1, email_id=?, user_status=0";

  return new Promise(async (resolve, reject) => {
    await databaseInstance.query(query, userData, (err, res) => {
      if (err) {
        return reject(err);
      }

      return resolve(JSON.parse(JSON.stringify(res)));
    });
  }).catch((error) => {
    throw new ErrorHandler(401);
  });
};

const findUserByEmail = async (userData) => {
  const query =
    "SELECT user_id,user_first_name,user_last_name,email_id,mobile_number FROM user_master WHERE email_id=?";

  return new Promise(async (resolve, reject) => {
    await databaseInstance.query(query, userData, (err, res) => {
      if (err) {
        return reject(err);
      }

      return resolve(JSON.parse(JSON.stringify(res)));
    });
  }).catch((error) => {
    throw new ErrorHandler(401);
  });
};

const findUser = async (userData) => {
  const query =
    "SELECT user_id,user_first_name,user_last_name,email_id,mobile_number FROM user_master WHERE user_id=?";

  return new Promise(async (resolve, reject) => {
    await databaseInstance.query(query, userData, (err, res) => {
      if (err) {
        return reject(err);
      }

      return resolve(JSON.parse(JSON.stringify(res)));
    });
  }).catch((error) => {
    throw new ErrorHandler(401);
  });
};

const verificationAttempt = async (userData) => {
  const query = `SELECT SUM(verification_attempt) as count FROM (
SELECT otp_id, email_id,otp_code, otp_code_expires, created_at, verification_attempt FROM otp_verification WHERE email_id= ?)a GROUP BY a.email_id`;

  return new Promise(async (resolve, reject) => {
    await databaseInstance.query(query, userData, (err, res) => {
      if (err) {
        return reject(err);
      }

      return resolve(JSON.parse(JSON.stringify(res)));
    });
  }).catch((error) => {
    throw new ErrorHandler(401);
  });
};

const updateVerificationAttempt = async (userData) => {
  const query =
    "UPDATE otp_verification SET verification_attempt=verification_attempt + 1 WHERE otp_id=?";

  return new Promise(async (resolve, reject) => {
    await databaseInstance.query(query, userData, (err, res) => {
      if (err) {
        return reject(err);
      }

      return resolve(JSON.parse(JSON.stringify(res)));
    });
  }).catch((error) => {
    throw new ErrorHandler(401);
  });
};

const saveVerificationCode = async (userData) => {
  // otp_code_expires=DATE_ADD(NOW(), INTERVAL 5 MINUTE)

  const { email_id, verificationCode } = userData;

  const verficationCodeExpire = new Date(Date.now() + 5 * 60 * 1000);

  console.log(verficationCodeExpire)

  const query =
    "INSERT INTO otp_verification SET email_id=?,otp_code=?,otp_code_expires=date_format(?, '%Y-%m-%d''%H:%i:%s %p'),verification_attempt=0";

  return new Promise(async (resolve, reject) => {
    await databaseInstance.query(
      query,
      [email_id, verificationCode, verficationCodeExpire],
      (err, res) => {
        if (err) {
          return reject(err);
        }

        return resolve(JSON.parse(JSON.stringify(res)));
      }
    );
  }).catch((error) => {
    throw new ErrorHandler(401);
  });
};

const getVerificaionCode = async (userData) => {
  const query =
    "SELECT otp_id,email_id,otp_code,otp_code_expires FROM otp_verification WHERE email_id=? ORDER BY otp_code_expires DESC";

  return new Promise(async (resolve, reject) => {
    await databaseInstance.query(query, userData, (err, res) => {
      if (err) {
        return reject(err);
      }

      return resolve(JSON.parse(JSON.stringify(res)));
    });
  }).catch((error) => {
    throw new ErrorHandler(401);
  });
};

const deleteVerificaionUsers = async (userData) => {
  const query = "DELETE FROM otp_verification WHERE email_id=?";

  return new Promise(async (resolve, reject) => {
    await databaseInstance.query(query, userData, (err, res) => {
      if (err) {
        return reject(err);
      }

      return resolve(JSON.parse(JSON.stringify(res)));
    });
  }).catch((error) => {
    throw new ErrorHandler(401);
  });
};

const updateRefreshToken = async (userData) => {
  const { refreshToken, user_id } = userData;

  const query = "UPDATE user_master SET reset_password_token=? WHERE user_id=?";

  return new Promise(async (resolve, reject) => {
    await databaseInstance.query(query, [refreshToken, user_id], (err, res) => {
      if (err) {
        return reject(err);
      }

      return resolve(JSON.parse(JSON.stringify(res)));
    });
  }).catch((error) => {
    throw new ErrorHandler(401);
  });
};

const comparePassword = async function (enteredPassword, dbpassword) {
  return await bcrypt.compare(enteredPassword, dbpassword);
};

const generateAccessToken = function (user_id) {
  return jwt.sign({ id: user_id }, process.env.ASSECC_TOKEN_SECRET, {
    expiresIn: process.env.ASSECC_TOKEN_EXPIRE,
  });
};

const generateRefreshToken = function (user_id) {
  return jwt.sign({ id: user_id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
  });
};

export {
  newUser,
  findUserByEmail,
  findUser,
  verificationAttempt,
  updateVerificationAttempt,
  saveVerificationCode,
  getVerificaionCode,
  deleteVerificaionUsers,
  generateAccessToken,
  generateRefreshToken,
  updateRefreshToken,
};
