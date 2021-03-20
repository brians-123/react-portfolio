import React from "react";
import { Link } from "react-router-dom";

export function Header(props) {
  return (
    // <div>
    //   <div>Work</div>
    //   <div>Contacts</div>
    // </div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
      </ul>
    </nav>
  );
}
