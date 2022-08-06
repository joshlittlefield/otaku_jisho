import React from "react";
import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import { Outlet } from "react-router-dom";

import NavBar from "../Navbar/Navbar";
import LevelCard from "../Card/LevelCard";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";






import KanjiCard from "../Card/KanjiCard";

const AllLevels = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
      }));
    
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [Level, setLevel] = useState([]);
  const [levelKanji, setLevelKanji] = useState([]);
  const [error, setError] = useState(null);
  const [filmsID, setFilmsID] = useState();

  const levelURL = `https://kanjiapi.dev/v1/kanji/${gradeLevel}`;

  const fetchLevelHandler = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(levelURL);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      setLevelKanji(data.results);
    } catch (error) {
      setError(error.message);
    }
  }, [levelURL]);

  useEffect(() => {
    fetchLevelHandler();
  }, [fetchLevelHandler]);

  return (
    <>
    <NavBar />
    <h1>ALL JLPT Levels</h1>;
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}>
        <Grid item xs>
          <Item>
            <LevelCard
              level="N1"
              japDescription="能力試験N1レベル漢字"
              gradeURL={"grade-1"}
            />
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
            <LevelCard
              level="N2"
              japDescription="能力試験N2レベル漢字"
              gradeURL="grade-2"
            />
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
            <LevelCard
              level="N3"
              japDescription="能力試験N3レベル漢字"
              gradeURL="grade-3"
            />
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
            <LevelCard
              level="N4"
              japDescription="能力試験N4レベル漢字"
              gradeURL="grade-4"
            />
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
            <LevelCard
              level="N5"
              japDescription="能力試験N5レベル漢字"
              gradeURL="grade-5"
            >
              <Link to="/JLPTLevel" gradeURL={gradeURL}>
                Select Level
              </Link>
            </LevelCard>
          </Item>
        </Grid>
      </Grid>
    </Box>
  </>
    

          {levelKanji.map((kanji) => {
            return <KanjiCard kanji={kanji.kanji} />;
          })}
        
  );
};

export default AllLevels;
