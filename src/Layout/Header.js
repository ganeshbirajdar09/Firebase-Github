import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { GitHub } from "@material-ui/icons";

import { UserContext } from "../context/UserContext";

const Header = () => {
  const context = useContext(UserContext);
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    <header>
      <div className="wrapper">
        <h1 className="logo">
          <span className="github-icon">
            <GitHub className="svg" />
          </span>
          Ganesh<span>GitfireApp&nbsp;&nbsp;&nbsp;&nbsp; </span>
        </h1>
        <span className={window.screen.width < 500 ? "hello-msg" : ""}>
          {context.user?.email
            ? "Hello👋 " + context.user.email.replace("@gmail.com", "")
            : ""}
        </span>

        <nav className={isActive ? "main-nav main-nav-open" : "main-nav"}>
          {!context.user ? (
            <ul>
              <li>
                <Link to="/signup" className="nav-icon">
                  Signup
                </Link>
              </li>
              <li>
                <Link to="/signin" className="nav-icon">
                  Signin
                </Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link
                  onClick={() => {
                    context.setUser(null);
                  }}
                  className="nav-icon"
                >
                  Logout
                </Link>
              </li>
            </ul>
          )}
        </nav>

        <div
          onClick={toggleClass}
          className={isActive ? "menu-toggle open" : "menu-toggle"}
        >
          <div className="hamburger"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
