import React from "react";

export default function NavBar() {
  return (
    <div className="navbar">
      {/* becuse dont work src local in react I use require in page  */}
      <img src={require("../images/logoaps.png")} alt="logo" />
      <ul>
        <li>Home...</li>
        <li>Todo</li>
        <li>Courses</li>
      </ul>
    </div>
  );
}
