import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Cinephilist</h1>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active link" : "link")}
            >
              Watchlist
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/watched"}
              className={({ isActive }) => (isActive ? "active link" : "link")}
            >
              Watched
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/addmovies"}
              className={({ isActive }) => (isActive ? "active link" : "link")}
            >
              Add Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
