import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import JLPTLevel from "../JLPTLevel/JLPTLevel";

const LevelCard = (props) => {
  const gradeURL = props.gradeURL;
  console.log(gradeURL);
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            JLPT LEVEL {props.level}
          </Typography>
          <Typography variant="h5" component="div">
            KANJI
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.japDescription}
          </Typography>
          <Typography variant="body2">Number of Kanji - </Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Box>
  );
};

export default LevelCard;
