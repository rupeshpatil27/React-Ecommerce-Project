import React from "react";

import "./ToastNotification.css"

import { MdInfo, MdWarning, MdCheckCircle, MdError } from "react-icons/md";

function ToastNotification({ type = "info", message, onclose }) {
  const icons = {
    success: <MdCheckCircle className={`icon ${type}`} />,
    info: <MdInfo className={`icon ${type}`} />,
    warning: <MdWarning className={`icon ${type}`} />,
    error: <MdError className={`icon ${type}`} />,
  };
  return (
    <div className="toast-error-container">
      <div className="icon-container">{icons[type]}</div>
      <div className="error-message">
        <span>{message ? message : ""}</span>
      </div>
    </div>
  );
}

export default ToastNotification;
