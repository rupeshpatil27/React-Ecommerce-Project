import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import RootLayout from "../src/Layouts/RootLayout";
import Auth from "./Pages/Account/Auth/Auth";
import OtpVerification from "./Pages/Account/Auth/OtpVerification";
import Cart from "./Pages/Cart/Cart";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Home from "./Pages/Home/Home";
import ProductListing from "./Pages/ProductListing/ProductListing";
import MobilePhoneStore from "./Pages/ProductStore/MobilePhoneStore";

import { getCurrentUser } from "./features/auth/authAPI";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

const App = () => {

  const { userData, isAuthenticated, isCheckingAuth } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/auth" replace />
    }

    return children
  }

  const RedirectAuthenticatedUsers = ({ children }) => {
    if (isAuthenticated) {
      return <Navigate to="/" replace />
    }

    return children
  }


  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home />, index: true },
        { path: "auth", element: <Auth /> },
        { path: "otp-verification", element: <OtpVerification /> },
        { path: "cart", element: <Cart /> },
        { path: "wishlist", element: <Wishlist /> },
        { path: "mobile-phone-store", element: <MobilePhoneStore /> },
        { path: "product-list", element: <ProductListing /> },
      ],
    },
  ], {
    future: {
      v7_relativeSplatPath: true,
    },
  });

  if (isCheckingAuth) {
    return <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi assumenda consequatur ipsa modi dolore quia sequi soluta nesciunt rem reprehenderit molestiae ad, quae exercitationem. Eius molestiae accusamus nostrum hic. Quae!</div>
  }

  return (
    <>
      <RouterProvider router={router} future={{
        v7_startTransition: true,
      }} />
    </>
  );
};

export default App;


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     children: [
//       { path: "/", element: <Home /> },
//       {
//         path: "/account", element: <AccountLayout />,
//         children: [
//           { path: "/account/auth", element: <Auth />},
//           { path: "/account/otp-verification", element: <OtpVerification /> },
//         ]
//       },
//       { path: "cart", element: <Cart /> },
//       { path: "wishlist", element: <Wishlist /> },
//       { path: "mobile-phone-store", element: <MobilePhoneStore /> },
//       { path: "product-list", element: <ProductListing /> },
//     ],
//   },
// ]);