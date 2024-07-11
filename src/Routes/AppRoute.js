import React from "react";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import TextConverter from "../Pages/TextConverter";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import Btn_conut from "../Pages/Btn_count";
function AppRoute(props) {
    return (
      <Router {...props}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="TextConverter" element={<TextConverter />} />
          <Route path="Login" element={<Login />} />
          <Route path="Logout" element={<Logout />} />
          <Route path="Btn_count" element={<Btn_conut />} />
        </Routes>
      </Router>
    );
  }
  export default AppRoute;