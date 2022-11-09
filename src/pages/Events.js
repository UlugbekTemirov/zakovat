import * as React from "react";
import RankingComp from "../components/RankingComp";
import UpcomingGame from "../components/UpcomingGame";

import { domainName } from "../global/global";

const Events = (props) => {
  const [groups, setGroups] = React.useState([]);

  React.useEffect(() => {
    fetch(`${domainName}/api/v1/groups/`)
      .then((promise) => promise.json())
      .then((data) => setGroups(data));
  }, []);

  if (groups.length == 0)
    return <h1 className="text-center mt-5">Yuklanyapti...</h1>;

  return (
    <>
      <h1 className="text-center text-goldish mt-4 mb-0">Saralash bosqichi</h1>
      <div className="row">
        {groups.map((group) => (
          <RankingComp key={group.name} name={group.name} teams={group.teams} />
        ))}
      </div>
      <h1 className="text-center text-goldish mt-5 mb-4">
        Rejalashtirilgan o'yinlar
      </h1>
      <UpcomingGame />
    </>
  );
};

export default Events;
