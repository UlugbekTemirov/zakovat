import * as React from "react";

import TeamsList from "../components/TeamsList";
import BasicModal from "../components/BasicModal";

const DUMMY_DATA = [
  {
    id: "zl1",
    team: "Olimp",
    members: ["Jahongir", "Aziz"],
    leader: "Jahongir",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: "zl2",
    team: "O'zbekona",
    members: [
      "Narimon",
      "Ulug'bek",
      "Murodjon",
      "Nozima",
      "Abror",
      "Samariddin",
    ],
    leader: "Narimon",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

const Teams = () => {
  const [selectedTeam, setSelectedTeam] = React.useState("");

  const getIdHandler = (id) => {
    let team = DUMMY_DATA.filter((items) => items.id === id);
    // console.log(team);
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
          teams={DUMMY_DATA}
          getIdHandler={getIdHandler}
          handleOpen={handleOpen}
        />
      </div>
      <BasicModal open={open} handleClose={handleClose} team={selectedTeam} />
    </>
  );
};

export default Teams;
