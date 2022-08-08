import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import SingleKanjiCard from "../Card/SingleKanjiCard";
import "../../App/App.css";

const SingleKanji = () => {
  const location = useLocation();

  const singleKanji = location.state.oneKanji;
  const [oneKanji, setOneKanji] = useState([]);
  console.log(singleKanji);

  useEffect(() => {
    let kanjiData = [];
    fetch(`https://kanjiapi.dev/v1/kanji/${singleKanji}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        kanjiData = data;

        setOneKanji(kanjiData);
      })
      .catch((error) => console.log(error.message));
  }, [singleKanji]);

  console.log(oneKanji);

  return (
    <>
      <NavigationBar />
      <h1 className="pageTitle">N{oneKanji.jlpt}</h1>

      <div>
        <SingleKanjiCard
          key={oneKanji.id}
          kanji={oneKanji.kanji}
          grade={oneKanji.grade}
          jlpt={oneKanji.jlpt}
          kun={oneKanji.kun_readings}
          on={oneKanji.on_readings}
          meanings={oneKanji.meanings}
          name_readings={oneKanji.name_readings}
        />
      </div>
    </>
  );
};

export default SingleKanji;
