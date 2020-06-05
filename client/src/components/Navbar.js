import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar is-dark" style={{ marginBottom: 50 }}>
      <div className="navbar-brand">
        <h1 className="navbar-item is-size-2">Unicademy</h1>
      </div>
      <div className="navbar-menu navbar-end">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/about" className="navbar-item">
          About
        </Link>
        <Link to="/courses" className="navbar-item">
          Courses
        </Link>
        <Link to="/pricing" className="navbar-item">
          Pricing
        </Link>
        <Link to="/teach" className="navbar-item">
          Teach
        </Link>
        <div className="navbar-item">
          <div className="buttons">
            <Link to="/signup" className="button is-primary">
              Sign Up
            </Link>
            <Link to="/login" className="button is-primary is-outlined">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
