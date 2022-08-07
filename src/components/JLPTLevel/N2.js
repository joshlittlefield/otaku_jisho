import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../Navbar/NavBar";
import KanjiCard from "../Card/KanjiCard";

const N2 = () => {
  let params = useParams();
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [Level, setLevel] = useState([]);
  const [levelKanji, setLevelKanji] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let kanjiData = [];
    fetch(`https://kanjiapi.dev/v1/kanji/grade-2`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        kanjiData = data;

        setLevelKanji(kanjiData);
      })
      .catch((error) => console.log(error.message));
  }, [params]);

  return (
    <>
      <NavBar />
      <h1>N2</h1>

      <div>
        {levelKanji.map((kanji) => {
          return <KanjiCard key={kanji} singleKanji={kanji} />;
        })}
      </div>
    </>
  );
};

export default N2;
