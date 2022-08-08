import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import "../../App/App.css";

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <h1 className="pageTitle">Welcome to the OtakuJisho</h1>
      <h2 className="pageTitle">A Kanji resource</h2>
    </div>
  );
};

export default Home;
