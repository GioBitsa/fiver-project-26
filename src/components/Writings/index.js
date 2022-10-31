import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = "https://project-26-server.herokuapp.com/";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [toggleState, setToggleState] = useState(1);
  const [storiesArray, setStoriesArray] = useState([]);
  const [modalContent, setModalContent] = useState({});
  const [editedContent, setEditedContent] = useState({});
  const [update, setUpdate] = useState(false);

  const navigate = useNavigate();

  const [modal, setModal] = useState(false);
  const [makeEdit, setMakeEdit] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleDelete = (id) => {
    setMakeEdit(false);
    axios
      .delete(`${API}${id}`)
      .then(() => setUpdate(!update))
      .catch((error) => console.log(error));
  };

  const handleEdit = (id) => {
    axios
      .put(`${API}${id}`, {
        type: editedContent.type,
        title: editedContent.title,
        text: editedContent.text,
      })
      .then(() => setUpdate(!update))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(API)
        .then((res) => setStoriesArray(res.data))
        .catch((error) => console.log(error));
    };

    fetchData();

    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, [makeEdit, update]);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="container about-page">
        <div className="columns columns--about">
          <div className="text-zone text-zone--about">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={[
                  "M",
                  "y",
                  " ",
                  "W",
                  "r",
                  " i",
                  "t",
                  "i",
                  "n",
                  "g",
                  "s",
                ]}
                idx={15}
              />
            </h1>
            <div className="container">
              <div className="bloc-tabs">
                <button
                  className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(1)}
                >
                  Short Story
                </button>
                <button
                  className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(2)}
                >
                  Scripts
                </button>
              </div>

              <div className="content-tabs">
                <div
                  className={
                    toggleState === 1 ? "content  active-content" : "content"
                  }
                >
                  {storiesArray
                    .filter((item) => item.type === "short")
                    ?.map((item, index) => (
                      <div className="story-button" key={index}>
                        <h2
                          onClick={() => {
                            toggleModal();
                            setMakeEdit(false);
                            setModalContent({
                              title: item.title,
                              text: item.text,
                            });
                          }}
                        >
                          {item.title}
                        </h2>
                        {localStorage.getItem("admin") && (
                          <div className="crud">
                            <button
                              onClick={() => {
                                setMakeEdit(true);
                                toggleModal();
                                setEditedContent({
                                  id: item._id,
                                  type: item.type,
                                  title: item.title,
                                  text: item.text,
                                });
                              }}
                            >
                              R
                            </button>
                            <button onClick={() => handleDelete(item._id)}>
                              X
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                </div>

                <div
                  className={
                    toggleState === 2 ? "content  active-content" : "content"
                  }
                >
                  <h2>Content 2</h2>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sapiente voluptatum qui adipisci.
                  </p>
                  {storiesArray
                    .filter((item) => item.type === "long")
                    ?.map((item, index) => (
                      <div className="story-button" key={index}>
                        <h2
                          onClick={() => {
                            toggleModal();
                            setMakeEdit(false);
                            setModalContent({
                              title: item.title,
                              text: item.text,
                            });
                          }}
                        >
                          {item.title}
                        </h2>
                        {localStorage.getItem("admin") && (
                          <div className="crud">
                            <button
                              onClick={() => {
                                setMakeEdit(true);
                                toggleModal();
                                setEditedContent({
                                  id: item._id,
                                  type: item.type,
                                  title: item.title,
                                  text: item.text,
                                });
                              }}
                            >
                              R
                            </button>
                            <button onClick={() => handleDelete(item._id)}>
                              X
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="login-button" onClick={() => navigate("/login")}>
          Login
        </button>

        <div className="copy">
          <p> Copyright 2022 &copy; Codeier Technology</p>
          {/* <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li> */}
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          {makeEdit ? (
            <div className="modal-content">
              <select
                value={editedContent.type}
                onChange={(e) =>
                  setEditedContent({ ...editedContent, type: e.target.value })
                }
                required
              >
                <option value="short">Short</option>
                <option value="long">Long</option>
              </select>
              <input
                required
                type="text"
                value={editedContent.title}
                onChange={(e) =>
                  setEditedContent({ ...editedContent, title: e.target.value })
                }
              />
              <textarea
                required
                rows={10}
                value={editedContent.text}
                onChange={(e) =>
                  setEditedContent({
                    ...editedContent,
                    text: e.target.value,
                  })
                }
              />
              <button
                className="close-modal"
                onClick={() => {
                  toggleModal();
                  handleEdit(editedContent.id);
                  setMakeEdit(false);
                }}
              >
                Submit
              </button>
            </div>
          ) : (
            <div className="modal-content">
              <h2>{modalContent.title}</h2>
              <p>{modalContent.text}</p>
              <button className="close-modal" onClick={toggleModal}>
                CLOSE
              </button>
            </div>
          )}
        </div>
      )}

      <Loader type="pacman" />
    </>
  );
};

export default About;
