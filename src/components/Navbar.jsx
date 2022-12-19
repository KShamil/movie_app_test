import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { MovieContext } from "../context/MovieContext";
import "../config/i18n";
import { useTranslation } from "react-i18next";

const Navbar = (props) => {
  const [movies] = useContext(MovieContext);
  const { t, i18n } = useTranslation();
  const [mode, setMode] = useState("light-theme");

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  };

  const toggleMode = () => {
    mode === "light-theme" ? setMode("dark-theme") : setMode("light-theme");
  };

  return (
    <nav id="light" className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" href="#">
          {t("changeNavLanguage.logo")}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => {
                  return { color: isActive ? "#ff5722" : "" };
                }}
                to="/"
                className="nav-link"
                aria-current="page"
                href="#"
              >
                {t("changeNavLanguage.nav-link1")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) => {
                  return { color: isActive ? "#ff5722" : "" };
                }}
                to="/movieblog"
                className="nav-link"
                href="#"
              >
                {t("changeNavLanguage.nav-link2")}({movies.length})
              </NavLink>
            </li>
          </ul>
          <form
            className="d-flex search-bar container py-2 col-4"
            role="search"
          >
            <input
              onChange={props.searchValue}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div className="d-flex mx-2">
            <Link
              to="/authentication"
              className="dashboard-btn btn btn-danger"
              type="submit"
            >
              {t("changeNavLanguage.dashboard-btn")}
            </Link>
          </div>
          <div className="d-flex mx-2">
            <button
              className="eng btn btn-danger"
              onClick={() => {
                handleClick("en");
              }}
            >
              ENG
            </button>
          </div>
          <div className="d-flex">
            <button
              className="az btn btn-danger"
              onClick={() => {
                handleClick("az");
              }}
            >
              AZ
            </button>
          </div>
          <div className="change-mode d-flex mx-2">
            <i onClick={toggleMode} className="change-mode-btn"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
