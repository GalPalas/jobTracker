import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
        <div className="container">
          <a href="/#" className="navbar-brand">
            <h1 className="tracker">Job Tracker</h1>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
