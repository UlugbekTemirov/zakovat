import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";

import ListMembers from "./ListMembers";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const { team } = props;
  return (
    <Modal
      key={team.id}
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {team.team}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {team.description}
          <Typography element={"h4"} className="text-success mt-4 mb-0">
            Team members
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {props.open &&
              team.members.map((member) => (
                <ListMembers
                  key={member}
                  member={member}
                  leader={team.leader}
                />
              ))}
          </List>
        </Typography>
      </Box>
    </Modal>
  );
}
