import React from "react";
import { Link } from "react-router-dom";

export function Header(props) {
  return (
    <nav className="navbar-dark" id="nav">
      <div className="d-flex flex-sm-row flex-column justify-content-between text-center">
        <Link to="/">
          <h3 id="brian-shor-nav">
            <div className="nav-link" href="#">
              Brian Shor
            </div>
          </h3>
        </Link>
        <Link to="/about-me">
          <h3 id="about-me-nav">
            <div className="nav-link" href="#about-me">
              About Me
            </div>
          </h3>
        </Link>
        <Link to="/work">
          <h3 id="work-nav">
            <div className="nav-link" href="#work">
              Work
            </div>
          </h3>
        </Link>
      </div>
      <div className="container"></div>
    </nav>
  );
}
