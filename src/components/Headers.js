import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Header(props) {
  const mystyle = {
    backgroundColor: "orange",
    padding: "5px",
    marginTop: "-8px",
  };

  const myText = {
    color: "white",
    fontSize: "20px",
    display: "flex",
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg text-white lg-body navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid" style={mystyle}>
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2" style={myText}>
              <Link className="navbar-brand" to="/">
                {props.title}
              </Link>
              {/* <li className="nav-item active">
                <Link className="nav-link" to="/">
                  {props.homeText}
                </Link>
              </li> */}
              <li className="nav-item active">
                <Link className="nav-link" to="/textutlise">
                  {props.textForm}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/features">
                  {props.featuresText}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  {props.contactUs}
                </Link>
              </li>
            </ul>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                <b>Enable DarkMode</b>
              </label>
            </div>
          </div>
        </div>
      </nav>

      <div style={{ matrginTop: "-80px" }}></div>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

Header.defaultProps = {
  title: "Set title here",
  aboutText: "About",
  textForm:"TextForm",
  // homeText:"Home",
  featuresText: "Features",
  contactUs: "Contact Us",
};

export default Header;
