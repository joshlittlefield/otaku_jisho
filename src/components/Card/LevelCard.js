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
                JLPT LEVEL {props.level}
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
            <CardActions></CardActions>
          </Card>
        </Box>
      </button>
    </>
  );
};

export default LevelCard;
