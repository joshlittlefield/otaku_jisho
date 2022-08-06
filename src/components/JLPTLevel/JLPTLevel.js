import React from "react";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const JLPTLevel = (props) => {
  const [gradeKanjis, setGradeKanjis] = useState([]);
  const [error, setError] = useState(null);
  const [JLPTGrade, setJLPTGrade] = useState();
  const [gradeURL, setGradeURL] = useState();

  const kanjiURL = `https://kanjiapi.dev/v1/kanji/${props.gradeLevelURL}`;
  console.log(kanjiURL);

  const fetchKanjiHandler = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(kanjiURL);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);
      setGradeKanjis(data.results);
    } catch (error) {
      setError(error.message);
    }
  }, [kanjiURL]);

  useEffect(() => {
    fetchKanjiHandler();
  }, [fetchKanjiHandler]);

  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/AllLevels">All JLPT Levels</Link>
      </nav>
      <h1>JLPT Level</h1>;
    </>
  );
};

export default JLPTLevel;
