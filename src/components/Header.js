import React from "react";
import { Link } from "react-router-dom";

export function Header(props) {
  return (
    <nav class="navbar-dark" id="nav">
      <div class="d-flex flex-sm-row flex-column justify-content-between text-center">
        <Link to="/">
          <h3 id="brian-shor-nav">
            <div class="nav-link" href="#">
              Brian Shor
            </div>
          </h3>
        </Link>
        <Link to="/about-me">
          <h3 id="about-me-nav">
            <a class="nav-link" href="#about-me">
              About Me
            </a>
          </h3>
        </Link>
        <Link to="/work">
          <h3 id="work-nav">
            <a class="nav-link" href="#work">
              Work
            </a>
          </h3>
        </Link>
      </div>
      <div class="container"></div>
    </nav>
  );
}
