import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useToastNotification from "../../../hooks/useToastNotification";

import "./OtpVerification.css";

import { clearErrorsMassage } from "../../../features/auth/authSlice";
import { createUser, LogIn, sendOTP } from "../../../features/auth/authAPI";

import ClipLoader from "react-spinners/ClipLoader";

const OtpVerification = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [proceed, setProcced] = useState(false);
  const [resendCount, setResendCount] = useState(30);

  const inputRef = useRef([]);

  const dispatch = useDispatch();
  const { isLoading,isAuthenticated } = useSelector((state) => state.auth);

  const { triggerNotification } = useToastNotification();

  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (resendCount <= 0) return;
    const timeout = setTimeout(() => {
      setResendCount(resendCount - 1);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [resendCount]);

  useEffect(() => {
    if (proceed) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [proceed]);

  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  const handleChange = (index, value) => {
    const newCode = [...code];

    if (value.length > 1) {
      const pastedCode = value.slice(0, 4).split("");
      for (let i = 0; i < 4; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);

      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 3 ? lastFilledIndex + 1 : 3;
      inputRef.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 3) {
        inputRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verficaationCode = code.join("");

    const userData = {
      email_id: state.email_id,
      otp: verficaationCode,
    };

    try {
      if (state.action === "login") {
        const result = await dispatch(LogIn(userData)).unwrap();

        if (!result.success) {
          return false;
        }

        triggerNotification({
          type: "success",
          message: result.message,
          duration: 3000,
        });

        setProcced(true);
      }

      if (state.action === "signup") {
        const result = await dispatch(createUser(userData)).unwrap();

        if (!result.success) {
          return false;
        }

        triggerNotification({
          type: "success",
          message: result.message,
          duration: 3000,
        });

        setProcced(true);
      }
    } catch (error) {
      triggerNotification({
        type: "error",
        message: error,
        duration: 3000,
      });
    }
  };

  const startResendCount = async () => {
    const userData = {
      email_id: state.email_id,
    };
    try {
      dispatch(clearErrorsMassage());
      const sendOtpResult = await dispatch(sendOTP(userData)).unwrap();

      if (!sendOtpResult.success) {
        return false;
      }

      triggerNotification({
        type: "success",
        message: sendOtpResult.message,
        duration: 3000,
      });

      setResendCount(30);
    } catch (error) {
      triggerNotification({
        type: "error",
        message: error,
        duration: 3000,
      });
    }
  };

  if (!state) {
    return <Navigate to="/auth" replace />;
  }

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
}

  return (
    <div className="otp-wrapper">
      <div className="otp-container">
        <p>Please enter OTP send to</p>
        <span className="email">
          {state.email_id}
          <Link to={"/auth"} className="link">
            Change
          </Link>
        </span>
        <form className="otp-form" onSubmit={handleSubmit}>
          <div className="otp-input-container">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRef.current[index] = el)}
                type="text"
                maxLength="4"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="input-box"
              />
            ))}
          </div>
          <button type="submit" className="otp-btn">
            {!isLoading ? (
              "Verify"
            ) : (
              <ClipLoader
                color="#fff"
                loading={true}
                size={16}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            )}
          </button>
        </form>
        <span className="resend">
          Not received our code{" "}
          {resendCount === 0 ? (
            <span
              className="link"
              style={{ cursor: "pointer" }}
              onClick={startResendCount}
            >
              Resend Code
            </span>
          ) : (
            <span className="link">{resendCount}</span>
          )}
        </span>
      </div>
    </div>
  );
};

export default OtpVerification;
