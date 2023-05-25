import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

const nav__links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "services",
    display: "Services",
  },
  {
    path: "news",
    display: "News",
  },
  {
    path: "blog",
    display: "Blog",
  },
  {
    path: "contact",
    display: "Contact",
  },
];

function Sidebar(props) {
  return (
    <div className="sidebar">
      <ul className="menu">
        {nav__links.map((item, index) => {
          return (
            <li className="nav__item" key={index}>
              <NavLink
                to={item.path}
                className={(navClass) =>
                  navClass.isActive ? "nav__active" : ""
                }
              >
                {item.display}{" "}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
