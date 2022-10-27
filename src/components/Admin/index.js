import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = "https://project-26-server.herokuapp.com/";

const AdminPage = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    type: "short",
    title: "",
    text: "",
  });

  const navigate = useNavigate();

  const handleFinish = (e) => {
    e.preventDefault();
    axios
      .post(API, formValues)
      .then(() => console.log("Added Sucessfully!"))
      .catch((error) => console.log(error));
    setLoading(true);

    setTimeout(() => {
      navigate("/writings");
    }, 500);
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
                strArray={[
                  "S",
                  "u",
                  "b",
                  "m",
                  "i",
                  "t",
                  " ",
                  "S",
                  "t",
                  "o",
                  "r",
                  "y",
                ]}
                idx={15}
              />
            </h1>
            <div className="container">
              <form onSubmit={(e) => handleFinish(e)}>
                <div className="input-container">
                  <label htmlFor="stories">Short/Long story</label>
                  <select
                    name="type"
                    required
                    onChange={(e) =>
                      setFormValues({ ...formValues, type: e.target.value })
                    }
                  >
                    <option value="short">Short</option>
                    <option value="long">Long</option>
                  </select>
                </div>
                <div className="input-container">
                  <label htmlFor="title">Story Title</label>
                  <input
                    type="text"
                    name="title"
                    required
                    onChange={(e) =>
                      setFormValues({ ...formValues, title: e.target.value })
                    }
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="text">Content</label>
                  <textarea
                    type="text"
                    name="text"
                    required
                    onChange={(e) =>
                      setFormValues({ ...formValues, text: e.target.value })
                    }
                  />
                </div>
                <button className="form-button" type="submit">
                  {loading ? <div className="form-loader" /> : "Submit"}
                </button>
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

export default AdminPage;
