import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import N1 from "../JLPTLevel/N1";

const KanjiCard = (props) => {
  let params = useParams();
  const singleKanjiURL = `https://kanjiapi.dev/v1/kanji/${props.singleKanji}`;
  const navigate = useNavigate();
  return (
    <>
      <button
        className={"LevelCard"}
        url={singleKanjiURL}
        onClick={() => {
          navigate(`/SingleKanji`);
        }}
      >
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="div">
                {props.singleKanji}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </button>
    </>
  );
};

export default KanjiCard;
