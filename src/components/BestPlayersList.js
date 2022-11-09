import * as React from "react";
// import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { domainName } from "../global/global";

export default function BestPlayersList(props) {
  const { bestPlayer } = props;

  return (
    <div className="col-lg-6 col-md-12 d-flex justify-content-center mt-3 ">
      <Card
        className="row w-100"
        sx={{
          fontFamily: "SpaceMono",
          // display: "flex",
          // minWidth: 400,
          maxHeight: 600,
          boxShadow: "#000 0px 7px 29px 0px;",
        }}
      >
        <Box
          className="col-lg-12 col-sm-6 text-center"
          // sx={{ display: "flex", flexDirection: "column" }}
        >
          <CardContent sx={{ flex: "1 0 auto", minWidth: 250 }}>
            <Typography
              sx={{ fontFamily: "SpaceMono" }}
              component="div"
              variant="h5"
            >
              {bestPlayer.name}
            </Typography>
            <Typography
              sx={{ fontFamily: "SpaceMono" }}
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {bestPlayer.team} | {bestPlayer.group}
            </Typography>
            {/* <Typography component="p" variant="p">
              {bestPlayer.group}
            </Typography> */}
            <Typography
              sx={{ fontFamily: "SpaceMono" }}
              component="p"
              variant="p"
            >
              {bestPlayer.description}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          className="col-lg-12 col-sm-6 p-0"
          component="img"
          sx={{ height: "100%" }}
          image={`${domainName}${bestPlayer.image}`}
          alt={bestPlayer.name}
        />
      </Card>
    </div>
  );
}
