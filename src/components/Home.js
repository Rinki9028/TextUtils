import React, { useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import TextForm from "./TextForm";
import Contact from "./Contact";
import Features from "./Features";

function Home() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "orange";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      {" "}
      <div
        className="text-center bg-image"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/Images/2.jpg)`,
          height: "100vh",
          marginTop: "-7px",
        }}
      >
        <div
          className="mask"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            height: "300px",
            margin: "auto",
          }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1>TextUtils is a word counter App</h1>
              <h6>
                TextUtils - Word counter ||| character counter ||| lowercase to
                uppercase ||| uppercase to lowercase
              </h6>
              <h5
                className="mb-3 py-2 infinite-scroll-text"
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                TextUtils - Word counter | character counter | lowercase to
                uppercase | uppercase to lowercase From This App TextUtils which
                can be used to manipulate your text in the way you want. You can
                remove extra spaces, copy the manipulated text as well as
                convert your text from Uppercase to lowercase and lowercase to
                Uppercase
              </h5>
              <Link
                data-mdb-ripple-init
                className="btn btn-outline-light btn-lg"
                To="/about"
                role="button"
              >
                Call to action
              </Link>
            </div>
          </div>
        </div>
      </div>
      <TextForm
        showAlert={showAlert}
        heading="Try TextUtils - word counter, character counter, remove extra spaces"
        mode={mode}
      />
      <About />
      <Features />
      <Contact />
    </>
  );
}

export default Home;
