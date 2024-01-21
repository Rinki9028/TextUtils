import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentTime = currentDate.toLocaleTimeString();

  const footerStyle = {
    background: "black",
    color: "white",
    fontSize: "14px",
  };

  return (
    <footer className="text-center text-lg-start" style={footerStyle}>
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <br />
            <h5 className="text-uppercase">Summary About TextUtils</h5>
            <br />
            <p>
              TextUtils - Word counter | character counter | lowercase to
              uppercase | uppercase to lowercase
              <br />
              From This App TextUtils which can be used to manipulate your text
              in the way you want. You can remove extra spaces, copy the
              manipulated text as well as convert your text from Uppercase to
              lowercase and lowercase to Uppercase.
            </p>
            <p>&copy; {new Date().getFullYear()} TextUtils App</p>
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <br />
            <h5 className="text-uppercase">Summary About TextUtils</h5>

            <br />
            <p>
              TextUtils - Word counter | character counter | lowercase to
              uppercase | uppercase to lowercase
              <br />
              From This App TextUtils which can be used to manipulate your text
              in the way you want. You can remove extra spaces, copy the
              manipulated text as well as convert your text from Uppercase to
              lowercase and lowercase to Uppercase.
            </p>
            <p>&copy; {new Date().getFullYear()} TextUtils App</p>
          </div>
        </div>
      </div>
      <h1 className="text-center text-white">
        <a className="text-white" href="/contact">
          Contact
        </a>
      </h1>
      <div
        className="text-center text-white p-3 infinite-scroll-text"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        ©CREATED AT {currentDate.toDateString()} {currentTime} : Created BY :
        {" Rinki Kumari "}
        <a
          href="https://www.linkedin.com/in/rinki-kumari-39a74a249/"
          className="text-body text-white"
        >
          rinki.dubeymapi@gmail.com
        </a>
      </div>
      <br />
      <br />
    </footer>
  );
}

export default Footer;
