import * as React from "react";

import TeamsList from "../components/TeamsList";
import BasicModal from "../components/BasicModal";
import { domainName } from "../global/global";
// import { DUMMY_DATA } from "../global/global";

const Teams = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(`${domainName}/api/v1/teams/`)
      .then((promise) => promise.json())
      .then((data) => setData(data));
  }, []);

  const [selectedTeam, setSelectedTeam] = React.useState("");

  const getIdHandler = (id) => {
    let team = data.filter((items) => items.id === id);
    setSelectedTeam(team[0]);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (data.length == 0)
    return <h1 className="text-center mt-5">Yuklanyapti...</h1>;

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
