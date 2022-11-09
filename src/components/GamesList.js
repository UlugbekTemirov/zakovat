import * as React from "react";
import { useParams } from "react-router-dom";
import { domainName } from "../global/global";
import GameResults from "./GameResults";

export default function GamesList() {
  const { teamSlug } = useParams();
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(`${domainName}/api/v1/teams/${teamSlug}/nim_chorak_results/`)
      .then((promise) => promise.json())
      .then((data) => setData(data));
  }, []);

  if (data.length == 0) return <h1>empty</h1>;

  return <GameResults myType={"events"} targetData={data} />;
}
