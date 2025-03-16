import React from 'react'
import "./Cart.css"
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import shopCart from "../../assets/images/shop-cart.png";

const Cart = () => {

  const { message, isLoading, isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="cart-container-wrapper">
      <div className="cart-container">
   {!isAuthenticated ? 
        <div className="empty-cart-container">
          <img src={shopCart} alt="shopCart"  className="image"/>
          <p className="text-1">Missing Cart items?</p>
          <p className="text-2">Login to see the items you added previously</p>

          <button className="login-btn">
            Login
          </button>
        </div>
       :
       <>cart</>
       }
      </div>
    </div>
  )
}

export default Cart