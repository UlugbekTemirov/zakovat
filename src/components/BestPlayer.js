import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function BestPlayer(props) {
  const theme = useTheme();
  const { bestPlayer } = props;

  return (
    <div className="col-lg-6 col-md-12 d-flex justify-content-center mt-3">
      <Card sx={{ display: "flex", minWidth: 400, maxHeight: 400 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto", minWidth: 250 }}>
            <Typography component="div" variant="h5">
              {bestPlayer.name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {bestPlayer.team} | {bestPlayer.group}
            </Typography>
            {/* <Typography component="p" variant="p">
              {bestPlayer.group}
            </Typography> */}
            <Typography component="p" variant="p">
              {bestPlayer.description}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          //   sx={{ maxHeight: 180 }}
          image={bestPlayer.image}
          alt="Best Player's Image"
        />
      </Card>
    </div>
  );
}
