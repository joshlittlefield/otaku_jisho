import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/AllLevels">All JLPT Levels</Link>{" "}
        | <Link to="/N1">N1</Link> | <Link to="/N2">N2</Link> |{" "}
        <Link to="/N3">N3</Link> | <Link to="/N4">N4</Link> |{" "}
        <Link to="/N5">N5</Link>
      </nav>
    </>
  );
};

export default NavBar;
