import * as React from "react";
import BestPlayersList from "./BestPlayersList";
import { domainName } from "../global/global";

const BestPlayers = () => {
  const [bestPl, setBestPl] = React.useState([]);

  React.useEffect(() => {
    fetch(`${domainName}/api/v1/best-players/`)
      .then((promise) => promise.json())
      .then((data) => setBestPl(data));
  }, []);

  if (bestPl.length == 0) return;
  //   <h3 className="text-center text-white text-opacity-75">No information</h3>

  return (
    <>
      <h1 className="mt-4 mb-0 text-center text-warning">Best Players</h1>
      <p className="text-center mt-3 fs-4 text-white text-opacity-50">
        {bestPl.description}
      </p>
      {bestPl.information.map((data) => (
        <BestPlayersList key={data.id} bestPlayer={data} />
      ))}
    </>
  );
};

export default BestPlayers;
