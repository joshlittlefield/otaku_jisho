import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";

const LevelCard = (props) => {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ minWidth: 100 }}>
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
          </Card>
        </Box>
      </Container>
    </>
  );
};

export default LevelCard;
