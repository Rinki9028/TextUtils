import "./App.css";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Header from "./components/Headers";
import Home from "./components/Home";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
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
      document.body.style.backgroundColor = "#dbba7a";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Header
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          key={new Date()}
        />
        <Alert alert={alert} />{" "}
        <Route exact path="/">
          <Home />
        </Route>
        <div className="container my-3">
          <Switch>
            <Route path="/about">
              <About mode={mode} />
            </Route>

            <Route path="/Features">
              <Features />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route exact path="/textutlise">
              <TextForm
                showAlert={showAlert}
                heading="Try TextUtils - word counter, character counter, remove extra spaces"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
