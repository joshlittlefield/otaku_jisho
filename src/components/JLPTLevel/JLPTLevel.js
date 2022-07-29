import React from "react";
import { Link } from "react-router-dom";

const JLPTLevel = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/AllLevels">All JLPT Levels</Link>
      </nav>
      <h1>JLPT Level</h1>;
    </>
  );
};

export default JLPTLevel;
