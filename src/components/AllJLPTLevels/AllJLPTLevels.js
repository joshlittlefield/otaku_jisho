import React from "react";
import { Link } from "react-router-dom";

const AllJLPTLevels = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/AllLevels">All JLPT Levels</Link>
      </nav>
      <h1>ALL JLPT Levels</h1>;
    </>
  );
};

export default AllJLPTLevels;
