import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const TeamsList = (props) => {
  const generalFunc = (id) => {
    props.getIdHandler(id);
    props.handleOpen();
  };

  return props.teams.map((team) => (
    <Typography
      component={"span"}
      variant={"body2"}
      key={team.id}
      className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3 d-flex justify-content-center"
    >
      <Card
        onClick={() => generalFunc(team.id)}
        sx={{ maxWidth: 345, fontFamily: "SpaceMono" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={team.image}
            alt={team.name}
          />
          <CardContent>
            <Typography
              sx={{ fontFamily: "SpaceMono" }}
              gutterBottom
              variant="h5"
              component="div"
            >
              {team.name}
            </Typography>
            <Typography
              sx={{ fontFamily: "SpaceMono" }}
              variant="body2"
              color="text.secondary"
            >
              {team.description.slice(0, 50)}...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Typography>
  ));
};
export default TeamsList;
