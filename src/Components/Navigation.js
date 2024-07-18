//import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation(){
  // const [darkMode, setDarkMode] = useState(false);
  // document.title = 'React page';
  return (
    // <nav classNameName="navigation">
    //   <ul>
    //     <li><Link to="/">Home</Link></li>
    //     <li><Link to="/about">About</Link></li>
    //     <li><Link to="/contact">Contact</Link></li>
    //     <li><Link to="/message">Message</Link></li>
    //     <li><Link to="/login">Login</Link></li>
    //     <li><Link to="/logout">Logout</Link></li>
    //   </ul>
    // </nav>
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
      {/* The <Link> component is a replacement for anchor (<a>) tags in React applications when navigating between different routes. */}
        <Link className="navbar-brand" to="/">NewPage</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/textConverter">TextConverter</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">Logout</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/BtnCount">Btn_count</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Github">Profile Viewer</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form> */}
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" for="flexSwitchCheckDefault">Mode</label>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;