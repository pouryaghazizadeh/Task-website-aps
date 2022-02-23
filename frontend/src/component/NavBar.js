import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="navbar">
      {/* becuse dont work src local in react I use require in page  */}
      <img src={require("../images/logoaps.png")} alt="logo" />
      <ul>
        <li>
          <Link to="/">Home...</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
        <li>
          <Link to="/course">Courses</Link>
        </li>
      </ul>
    </div>
  );
}
