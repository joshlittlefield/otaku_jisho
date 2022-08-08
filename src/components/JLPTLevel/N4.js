import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import KanjiCard from "../Card/KanjiCard";

const N4 = () => {
  let params = useParams();

  const [levelKanji, setLevelKanji] = useState([]);

  useEffect(() => {
    let kanjiData = [];
    fetch(`https://kanjiapi.dev/v1/kanji/grade-4`)
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
      <h1 className="pageTitle">N4</h1>

      <div>
        {levelKanji.map((kanji) => {
          return <KanjiCard key={kanji} singleKanji={kanji} />;
        })}
      </div>
    </>
  );
};

export default N4;
