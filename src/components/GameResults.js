import * as React from "react";
import GameResultsList from "./GameResultsList";
import { domainName } from "../global/global";
import Loader from "./Loader";

const GameResults = (props) => {
  const { myType, targetData } = props;

  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(`${domainName}/api/v1/results/`)
      .then((promise) => promise.json())
      .then((data) => setData(data));
  }, []);

  if (data.length == 0) return <Loader />;

  if (targetData.length !== 0) {
    if (targetData.results.length == 0)
      return (
        <h3 className="text-white text-opacity-75 text-center mt-5">
          O'yinlar Topilmadi
        </h3>
      );
  }

  return (
    <>
      <h1 className="text-center text-warning mt-3">O'yin Natijalari</h1>
      <div className="row">
        {myType == "events" && (
          <GameResultsList myType={myType} gameResults={targetData.results} />
        )}
        {myType !== "events" &&
          data.map((gameResults) => (
            <GameResultsList key={gameResults.game} gameResults={gameResults} />
          ))}
      </div>
    </>
  );
};

export default GameResults;
