import React, { useEffect, useState } from "react";

import "./Header.css";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";

import { CategoriesNav, Dropdown, DropDownMenu } from "../index";

import { DropDownMenuItem} from "../../common/Element";
import { icons } from "../../common/Path";

const Header = () => {
  const [hovering, setHovering] = useState(false);
  const [popoverLeft, setPopoverLeft] = useState(null);
  const [popoverTop, setPopoverTop] = useState(null);

  const { isAuthenticated, userData } = useSelector((state) => state.auth);
  const [productList, SetProductList] = useState([]);

  const location = useLocation()
  const homePathPattern = /^\/$/
  const isHome = homePathPattern.test(location.pathname)

  useEffect(() => {
    async function getProductList() {
      const response = await fetch(
        "https://dummyjson.com/products/category-list"
      );
      const data = await response.json();
      SetProductList(data);
    }
    getProductList();
  }, []);

  const onMouseEnter = (el) => {
    setHovering(true);
    setPopoverLeft(el.offsetLeft);
    setPopoverTop(el.offsetHeight);
  };

  return (
    <>
      <div className="header-container">
        <div className="header">
          <a className="logo-container" href="http://localhost:5173">
            <h1 className="logo-txt">RShop</h1>
          </a>

          <div className="serach-container">
            <Dropdown productList={productList} />

            <div className="search-input-container">
              <input
                className="serach-input"
                placeholder="Search Products, Brands & More"
              />
            </div>
            <button className="search-btn">{icons.search}</button>
          </div>

          <div className="header-nav-link-container">
            <ul
              className="header-links"
              onMouseLeave={() => {
                setHovering(false);
              }}
            >
              <li className="link-item">
                <NavLink to={isAuthenticated ? "/" : "/auth"} className="nav-link" onMouseEnter={(event) => {
                onMouseEnter(event.currentTarget);
              }}>
                  {icons.Account}
                  {isAuthenticated
                    ? userData?.data?.user?.user_first_name
                      ? userData.data.user.user_first_name
                      : "Account"
                    : "Login"}
                  <div className="icon-con">{icons.arrowdown}</div>
                </NavLink>
              </li>

              <li className="link-item" onMouseEnter={() => {
                setHovering(false);
              }}>
                <NavLink to="/cart" className="nav-link">
                  {icons.cart}
                  Cart
                </NavLink>
              </li>

              <li className="link-item" onMouseEnter={() => {
                setHovering(false);
              }}>
                <NavLink to="/wishlist" className="nav-link">
                  {icons.heart}
                  Whishlist
                </NavLink>
              </li>

              <li className="link-item" onMouseEnter={() => {
                setHovering(false);
              }}>
                <NavLink to="/cart" className="nav-link">
                  {icons.customercare}
                  Customer Care
                </NavLink>
              </li>

              <DropDownMenu
                hovering={hovering}
                popoverTop={popoverTop}
                popoverLeft={popoverLeft}
                data={DropDownMenuItem.filter((item) =>
                  !isAuthenticated ? !item.authorized : item
                )}
              />
            </ul>
          </div>
        </div>

        {!isHome && <CategoriesNav />}
      </div>
    </>
  );
};

export default Header;

{/* {HeaderNavItem.map((item, index) =>
  index === 0 ? (
    <li
      className="link-item"
      key={item.title}
      onMouseEnter={(event) => {
        onMouseEnter(event.currentTarget);
      }}
    >
      <NavLink
        to={isAuthenticated ? "/" : item.path}
        className="nav-link"
      >
        {item.img}
        {isAuthenticated
          ? userData?.data?.user?.user_first_name
            ? userData.data.user.user_first_name
            : "Account"
          : item.title}
        <div className="icon-con">{icons.arrowdown}</div>
      </NavLink>
    </li>
  ) : (
    <li
      className="link-item"
      key={item.title}
      onMouseEnter={() => {
        setHovering(false);
      }}
    >
      <NavLink to={item.path} className="nav-link">
        {item.img}
        {item.title}
      </NavLink>
    </li>
  )
)} */}