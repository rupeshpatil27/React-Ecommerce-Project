import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import {Input} from "../../index";

import useToastNotification from "../../../hooks/useToastNotification";

import { sendOTP, userStatus } from "../../../features/auth/authAPI";
import { clearErrorsMassage } from "../../../features/auth/authSlice";

const SignUp = ({ showSignup }) => {
  const [email, setEmail] = useState("");
  const [proceed, setProcced] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);
  const { triggerNotification } = useToastNotification();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
    setFocus,
  } = useForm();

  useEffect(() => {
    if (proceed) {
      setTimeout(() => {
        navigate("/otp-verification", {
          state: { email_id: email, action: "signup" },
        });
      }, 2000);
    }
  }, [proceed]);

  useEffect(() => {
    setFocus("email");
  }, [showSignup]);

  const hangleSignup = async (data) => {
    const { email } = data;
    const userData = {
      email_id: email,
    };
    try {
      dispatch(clearErrorsMassage());
      const userStatusResult = await dispatch(userStatus(userData)).unwrap();
      if (userStatusResult.message === "VERIFIED") {
        triggerNotification({
          type: "info",
          message: "You are already register with us,please sign in",
          duration: 3000,
        });
        setValue("email", "");
        showSignup();
        return false;
      }

      if (userStatusResult.message === "NOT_FOUND") {
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
        setProcced(true);
        setEmail(email);
      }
    } catch (error) {
      triggerNotification({
        type: "error",
        message: error,
        duration: 3000,
      });
    }
  };
  return (
    <div className="signup-container">
      <h1 className="title">Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit(hangleSignup)}>
        <div className="input-container">
          <Input
            type="text"
            {...register("email", {
              required: { value: true, message: "Email Address is required" },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter Valid Email",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
            className={`input-box${errors.email ? " error" : ""}`}
            autoComplete="on"
            required
          />
          <label className="label-txt">Enter Email</label>
        </div>

        {errors.email && (
          <span className="error-msg">{errors.email?.message}</span>
        )}

        <button type="submit" className="login-signup-btn">
          {!isLoading ? (
            "Continue"
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

      <div className="link-container">
        <Link to={"/auth"} className="link" onClick={showSignup}>
          {"Existing User? Log In"}
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
