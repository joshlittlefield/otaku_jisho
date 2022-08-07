import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LevelCard = (props) => {
  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              JLPT Level {props.jlpt} | SCHOOL Grade - {props.grade}
            </Typography>
            <Typography variant="h3" component="div">
              {props.kanji}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.meanings}
            </Typography>
            <Typography variant="body2">
              Kun Reading - {props.kun}
              On Reading - {props.on}
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Box>
    </>
  );
};

export default LevelCard;
