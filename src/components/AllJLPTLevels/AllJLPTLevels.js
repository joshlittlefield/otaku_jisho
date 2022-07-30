import { Link } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import LevelCard from "../Card/LevelCard";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const AllJLPTLevels = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <NavBar />
      <h1>ALL JLPT Levels</h1>;
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          <Grid item xs>
            <Item>
              <LevelCard />
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <LevelCard />
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <LevelCard />
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <LevelCard />
            </Item>
          </Grid>
          <Grid item xs>
            <Item>
              <LevelCard />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AllJLPTLevels;
