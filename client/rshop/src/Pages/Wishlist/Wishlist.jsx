import React from 'react'
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Wishlist = () => {

  const { message, isLoading, isAuthenticated } = useSelector((state) => state.auth);

    if (!isAuthenticated) {
        return <Navigate to="/auth" replace />;
    }

  return (
    <div>Wishlist</div>
  )
}

export default Wishlist