import React from "react";
import "./DropDownMenu.css";
import { Link } from "react-router-dom";

const DropDownMenu = ({ hovering, popoverTop, popoverLeft, data }) => {
  return (
    <div
      style={{ left: popoverLeft || undefined, top: popoverTop || undefined }}
      className={`dropdown-menu-container ${hovering ? "active" : ""}`}
    >
      <ul className="dropdown-menu-list">
        {data.map((item, index) => (
          <Link className="menu-link-item" to={item.path} key={item.title}>
            <li className="menu-item">
              {item.img}
              {item.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default DropDownMenu;
