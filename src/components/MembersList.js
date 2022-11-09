import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function MembersList(props) {
  const { member } = props;
  console.log(member);

  return (
    <List
      sx={{
        width: "100%",
        margin: "0 auto",
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="User Image" src="" />
        </ListItemAvatar>
        <ListItemText
          primary={member.full_name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              ></Typography>
              {member.team[0]}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}

// import React from "react";

// const MembersList = ({ member }) => {
//   return (
//     <li key={member.full_name}>
//       {member.full_name} ------------ {member.team[0]}
//     </li>
//   );
// };

// export default MembersList;
