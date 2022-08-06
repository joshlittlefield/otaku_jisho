import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import NavBar from "../Navbar/Navbar";
import KanjiCard from "./KanjiCard";

const SingleKanjiCard = (props) => {
  let params = useParams();
  const singleKanjiURL = props.singleKanjiURL;

  const [singleKanji, setSingleKanji] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let kanjiData = [];
    fetch({ singleKanjiURL })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        kanjiData = data;

        setSingleKanji(kanjiData);
      })
      .catch((error) => console.log(error.message));
  }, [singleKanjiURL]);

  return (
    <>
      <NavBar />
      <h1>N1</h1>
      <div>Kanji goes here</div>
      <div>
        <h1>{singleKanji}</h1>
      </div>
    </>
  );
};

export default SingleKanjiCard;
