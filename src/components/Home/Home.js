import React from "react";
import NavBar from "../NavBar/NavBar";
import "../App/App.css";

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1 className="pageTitle">Welcome to the OtakuJisho</h1>
      <h2 className="pageTitle">A Kanji resource</h2>
    </div>
  );
};

export default Home;
