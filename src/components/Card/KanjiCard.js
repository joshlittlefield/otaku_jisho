import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

import N1 from "../JLPTLevel/N1";

const KanjiCard = (props) => {
  const [singleKanji, setSingleKanji] = useState([]);
  const [singleKanjiURL, setSingleKanjiURL] = useState([]);
  const [error, setError] = useState(null);

  let params = useParams();
  const singleURL = `https://kanjiapi.dev/v1/kanji/${props.singleKanji}`;
  const oneKanji = props.singleKanji;
  const navigate = useNavigate();

  return (
    <>
      <button
        className={"KanjiCard"}
        url={`https://kanjiapi.dev/v1/kanji/${oneKanji}`}
        kanji={oneKanji}
        onClick={() => {
          setSingleKanji(oneKanji);
          setSingleKanjiURL(singleURL);
          navigate(`/SingleKanji`, { state: { oneKanji } });
        }}
      >
        <Box sx={{ minWidth: 50 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h3" component="div">
                {oneKanji}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </button>
    </>
  );
};

export default KanjiCard;
