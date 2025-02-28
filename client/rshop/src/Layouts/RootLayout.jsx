import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import useToastNotification from "../hooks/useToastNotification";
const RootLayout = () => {
  const { notificationComponent } = useToastNotification();
  return (
    <>
      <div className="main-container">
        <div className="container">
          <Header />
          <div className="pages-container">
            <div className="pages">
              <Outlet />
            </div>

          </div>
        </div>
      </div>
      {notificationComponent}
    </>
  );
};

export default RootLayout;
