import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const GameResultsList = (props) => {
  const { gameResults: results } = props;
  return (
    <div className="col-lg-6">
      <Card
        sx={{
          // minWidth: 345,
          p: 0,
          mt: 2,
          boxShadow: "#000 0px 7px 29px 0px;",
          borderRadius: "15px",
        }}
      >
        <CardActionArea>
          <CardContent
            className={`d-flex justify-content-between ${
              results.draw ? "text-primary" : "text-success"
            }`}
          >
            <Typography
              className="team-name"
              variant="h4"
              component="h4"
              sx={{ fontFamily: "SpaceMono", fontSize: "24px" }}
            >
              {results.winner ? results.winner : results.game.split(" - ")[0]}
            </Typography>
            <Typography
              variant="h4"
              sx={{ mr: 3, fontFamily: "SpaceMono", fontSize: "24px" }}
            >
              {results.score1}
            </Typography>
          </CardContent>
          <CardContent
            className={`d-flex team-name justify-content-between ${
              results.draw ? "text-primary" : "text-danger"
            }`}
          >
            <Typography
              className="team-name"
              variant="h4"
              component="h4"
              sx={{ fontFamily: "SpaceMono", fontSize: "24px" }}
            >
              {results.loser ? results.loser : results.game.split(" - ")[1]}
            </Typography>
            <Typography
              variant="h4"
              sx={{ mr: 3, fontFamily: "SpaceMono", fontSize: "24px" }}
            >
              {results.score2}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default GameResultsList;
