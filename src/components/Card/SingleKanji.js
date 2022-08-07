import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import NavBar from "../Navbar/Navbar";
import KanjiCard from "./KanjiCard";
import N1 from "../JLPTLevel/N1";
import SingleKanjiCard from "../Card/SingleKanjiCard";

const SingleKanji = () => {
  let params = useParams();
  const location = useLocation();

  const singleKanji = location.state.oneKanji;
  const [oneKanji, setOneKanji] = useState([]);
  const [error, setError] = useState(null);
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
      <NavBar />
      <h1>N{oneKanji.jlpt}</h1>

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
