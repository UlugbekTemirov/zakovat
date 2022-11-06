import * as React from "react";

import TeamsList from "../components/TeamsList";
import BasicModal from "../components/BasicModal";
// import { DUMMY_DATA } from "../global/global";

const Teams = () => {
  const [data, setData] = React.useState([]);

  fetch("http://127.0.0.1:8000/api/v1/teams/")
    .then((promise) => promise.json())
    .then((data) => setData(data));

  const [selectedTeam, setSelectedTeam] = React.useState("");

  const getIdHandler = (id) => {
    let team = data.filter((items) => items.id === id);
    setSelectedTeam(team[0]);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //  const [modalState, setModalState] = React.useState(false);
  //  const openModalHandler = () => {};

  return (
    <>
      <div className="row mt-3">
        <TeamsList
          teams={data}
          getIdHandler={getIdHandler}
          handleOpen={handleOpen}
        />
      </div>
      <BasicModal open={open} handleClose={handleClose} team={selectedTeam} />
    </>
  );
};

export default Teams;
