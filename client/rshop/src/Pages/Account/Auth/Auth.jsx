import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./Auth.css"
import { Login, SignUp } from "../../../components";
import { Navigate } from "react-router-dom";

const Auth = () => {

    const [signup, setSignup] = useState(false);
    const { message, isLoading, isAuthenticated } = useSelector((state) => state.auth);

    const showSignup = () => {
        setSignup(!signup)
    }

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="auth-wrapper">
            {!signup ?
                <Login showSignup={showSignup} />
                :
                <SignUp showSignup={showSignup} />
            }
        </div>
    )
}

export default Auth