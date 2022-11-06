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
<<<<<<< HEAD
      className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-3 d-flex justify-content-center"
=======
      className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center"
>>>>>>> 094bca56227a21ecd4072bc38075a967060a3e65
    >
      <Card onClick={() => generalFunc(team.id)} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
<<<<<<< HEAD
            image={team.image}
            alt={team.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {team.name}
=======
            image="https://picsum.photos/seed/picsum/450/200"
            alt={team.team}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {team.team}
>>>>>>> 094bca56227a21ecd4072bc38075a967060a3e65
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {team.description.slice(0, 100)}...
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Typography>
  ));
};
export default TeamsList;
