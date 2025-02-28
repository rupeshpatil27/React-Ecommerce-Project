import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";
import { megaMenuData } from "../../../../common/Element";
const Menu = ({ hovering, mouseLeave, menuCategory }) => {
  return (
    <>
      {Object.keys(megaMenuData[0].megaMenuTitle).includes(menuCategory) && (
        <div
          className={`mega-menu-container ${hovering && "active"}`}
          onMouseLeave={() => {
            mouseLeave();
          }}
        >
          {megaMenuData[0].megaMenuTitle[menuCategory].map((data, index) => (
            <ul className="menu-col" key={index}>
              {data.menu.map((item, ind) => (
                <div key={ind}>
                  <li>
                    <NavLink
                      to=""
                      className={`menu-link ${item.NavCategory && "menu-title"
                        }`}
                    >
                      {item.Navtitle}
                    </NavLink>
                  </li>
                  {item.subMenu.map((it, i) => (
                    <li key={i}>
                      <NavLink
                        to=""
                        className={`menu-link ${it.NavCategory && "menu-title"
                          }`}
                      >
                        {it.Navtitle}
                      </NavLink>
                    </li>
                  ))}
                  <div className="category-bottom-line"></div>
                </div>
              ))}
            </ul>
          ))}
        </div>
      )}
    </>
  );
};

export default Menu;

// {Object.keys(megaMenuData[0].megaMenuTitle).includes(menuCategory) && (
//   <div
//     className={`mega-menu-container ${hovering && "active"}`}
//     onMouseLeave={() => {
//       mouseLeave();
//     }}
//   >
//     {megaMenuData[0].megaMenuTitle[menuCategory].map((data, index) => (
//       <ul className="menu-col" key={index}>
//         {data.menu.map((item, index) => (
//           <>
//             <li key={index}>
//               <NavLink
//                 to=""
//                 className={`menu-link ${
//                   item.NavCategory && "menu-title"
//                 }`}
//               >
//                 {item.Navtitle}
//               </NavLink>
//             </li>
//             {item.subMenu.map((it, index) => (
//               <li key={index}>
//                 <NavLink
//                   to=""
//                   className={`menu-link ${
//                     it.NavCategory && "menu-title"
//                   }`}
//                 >
//                   {it.Navtitle}
//                 </NavLink>
//               </li>
//             ))}
//             <div className="category-bottom-line"></div>
//           </>
//         ))}
//       </ul>
//     ))}
//   </div>
// )}