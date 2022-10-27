import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Writings from "./components/Writings";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Admin from "./components/Admin";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="writings" element={<Writings />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
