import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleFinish = (e) => {
    e.preventDefault();
    if (formValues.username === "admin" && formValues.password === "admin123") {
      setLoading(true);
      localStorage.setItem("admin", true);
      setTimeout(() => {
        navigate("/admin");
      }, 500);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="columns columns--about">
          <div className="text-zone text-zone--about">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={["L", "o", "g", "i", "n"]}
                idx={15}
              />
            </h1>
            <div className="container">
              <form onSubmit={(e) => handleFinish(e)}>
                <div className="input-container">
                  <label htmlFor="name">Username</label>
                  <input
                    type="text"
                    name="username"
                    required
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        username: e.target.value,
                      });
                      setError(false);
                    }}
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    required
                    onChange={(e) => {
                      setFormValues({
                        ...formValues,
                        password: e.target.value,
                      });
                      setError(false);
                    }}
                  />
                </div>
                <button className="form-button" type="submit">
                  {loading ? <div className="form-loader" /> : "Submit"}
                </button>
                {error && (
                  <div className="error-container">
                    Username or password is incorrect!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="copy">
          <p> Copyright 2022 &copy; Codeier Technology</p>
          {/* <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li> */}
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default LoginPage;
