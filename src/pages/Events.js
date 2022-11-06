import * as React from "react";
import RankingComp from "../components/RankingComp";

const Events = () => {
  const [groups, setGroups] = React.useState([]);

  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/groups/")
      .then((promise) => promise.json())
      .then((data) => setGroups(data));
  }, []);

  return (
    <>
      <h1>Group Division</h1>
      <div className="row">
        {groups.map((group, id) => (
          <RankingComp key={group.name} name={group.name} teams={group.teams} />
        ))}
      </div>
    </>
  );
};

export default Events;
