import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = ({ isAuth }) => {
  return (
    <header className="navbar">
      <h2 className="logo">ELearning.</h2>

      <nav>
        <ul>
          <li className="list-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="list-item">
            <Link to={"/courses"}>Courses</Link>
          </li>
          <li className="list-item">
            <Link to={"/about"}>About</Link>
          </li>
          {isAuth ? (
            <Link to={"/account"} className="account-btn">
              Account
            </Link>
          ) : (
            <Link to={"/login"} className="account-btn">
              Login
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
