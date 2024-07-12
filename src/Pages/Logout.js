import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Components/Navigation';
import './Logout.css';

function Logout(){
  document.title = 'React page - Logout';
  return (
    <>
    <Navigation/>
        <div className="logout-container">
        <header className="logout-header">
            <h1>Logout</h1>
        </header>
        <section className="logout-message">
            <h2>You have been logged out</h2>
            <p>Thank you for visiting. We hope to see you again soon.</p>
            <button>
              <Link to="/login">
                <button>Login Again</button>
              </Link>
            </button>
        </section>
        </div>
    </>
  );
};

export default Logout;