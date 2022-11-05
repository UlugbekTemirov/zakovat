import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function ListMembers(props) {
  const { member } = props;
  return (
    <ListItem key={member} alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt="Remy Sharp"
          src="https://picsum.photos/200/300?grayscale"
        />
      </ListItemAvatar>
      <ListItemText
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              {member}
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
          </React.Fragment>
        }
      />
    </ListItem>
  );
}

// /* <Divider variant="inset" component="li" /> */
