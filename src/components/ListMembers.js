import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function ListMembers(props) {
  const { member } = props;
  return (
    <ListItem key={member} alignItems="center">
      <ListItemAvatar>
        <Avatar alt={member} src="" />
      </ListItemAvatar>
      <ListItemText>
        <Typography
          sx={{ fontFamily: "SpaceMono" }}
          component="h6"
          variant="h6"
        >
          {member}
        </Typography>
      </ListItemText>
    </ListItem>
  );
}

// /* <Divider variant="inset" component="li" /> */
