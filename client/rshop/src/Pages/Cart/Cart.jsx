import React from 'react'
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Cart = () => {

  const { message, isLoading, isAuthenticated } = useSelector((state) => state.auth);

    if (!isAuthenticated) {
        return <Navigate to="/auth" replace />;
    }

  return (
    <div>Cart</div>
  )
}

export default Cart