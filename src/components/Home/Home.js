import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/AllLevels">All JLPT Levels</Link>
      </nav>
      <h1>Welcome Home Padawan</h1>
    </div>
  );
};

export default Home;
