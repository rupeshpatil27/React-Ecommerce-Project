import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { type = "text", className = "", ...props }, ref) {
  const id = useId();
  return (
    <input
      type={type}
      className={`${className}`}
      {...props}
      id={id}
      ref={ref}
    />
  );
});

export default Input;

