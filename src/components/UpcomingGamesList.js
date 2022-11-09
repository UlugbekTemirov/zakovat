import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const UpcomingGamesList = (props) => {
  const { game } = props;
  const date = new Date(game.time);

  // calendaric form of the game
  const gameYear = date.getFullYear();
  const gameMonth = date.getMonth();
  const gameDate = date.getDate();
  const gameDay = `${gameDate}.${gameMonth + 1}.${gameYear}`;

  // clock format of the game
  const gameHours = date.getHours();
  const gameMinutes = date.getMinutes();
  const gameTime = `${gameHours < 10 ? `0${gameHours}` : gameHours}:${
    gameMinutes < 10 ? `0${gameMinutes}` : gameMinutes
  }`;

  return (
    <Card
      sx={{
        fontFamily: "SpaceMono",
        my: 1,
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;",
      }}
    >
      <CardContent
        className="row text-center pb-3"
        sx={{ display: "flex", fontFamily: "SpaceMono" }}
      >
        <Typography
          sx={{ fontFamily: "SpaceMono" }}
          className="col-lg-4"
          variant="h5"
          component="div"
        >
          {game.team1} <span className="text-danger">VS</span> {game.team2}
        </Typography>
        <Typography
          sx={{ fontFamily: "SpaceMono" }}
          className="col-lg-4"
          variant="h5"
          component="div"
        >
          {gameDay}
        </Typography>
        <Typography
          sx={{ fontFamily: "SpaceMono" }}
          className="col-lg-4"
          variant="h5"
          component="div"
        >
          {gameTime}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UpcomingGamesList;
