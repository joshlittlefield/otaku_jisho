import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

const LevelCard = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className={"LevelCard"}
        onClick={() => {
          navigate(`/${props.level}`);
        }}
      >
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Japanese School Level {props.level}
              </Typography>
              <Typography variant="h5" component="div">
                KANJI
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.japDescription}
              </Typography>
              <Typography variant="body2">
                Number of Kanji - {props.noOfKanji}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </button>
    </>
  );
};

export default LevelCard;
