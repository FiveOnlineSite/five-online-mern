import React from "react";
import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <>
      <div className="sidebar-brand">
        <NavLink to="/">
          <img
            className="admin-logo"
            src="/images/fiveonline-white-logo.png"
            alt="Logo"
            loading="lazy"
          />
        </NavLink>
      </div>
      <div className="sidebar-menu">
        <ul>
          <li>
            <NavLink to="/blog" title="Services">
              <span className="las la-hands-helping"></span> <span>Blog</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/user-creation" title="Gallery">
              <span className="las la-photo-video"></span>{" "}
              <span>User Creation</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminSidebar;
