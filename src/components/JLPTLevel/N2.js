import React from "react";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import NavigationBar from "../NavigationBar/NavigationBar";
import KanjiCard from "../Card/KanjiCard";

const N2 = () => {
  let params = useParams();

  const [levelKanji, setLevelKanji] = useState([]);

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
      <NavigationBar />
      <h1 className="pageTitle">N2</h1>

      <div>
        {levelKanji.map((kanji) => {
          return <KanjiCard key={kanji} singleKanji={kanji} />;
        })}
      </div>
    </>
  );
};

export default N2;
