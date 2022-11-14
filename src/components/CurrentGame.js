import * as React from "react";
import { domainName } from "../global/global";

import "./CurrentGame.css";
import zakovat from "../images/zakovat.png";

const CurrentGame = (props) => {
  const [data, setData] = React.useState([]);

  const fetchData = () => {
    fetch(`${domainName}/api/v1/current-game/`)
      .then((promise) => promise.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  // setTimeout(fetchData, 10000);

  if (data.team1 == "")
    return (
      <h1 className="text-danger text-opacity-75 text-center mt-5">
        Hozirda mavjud o'yinlar topilmadi
      </h1>
    );

  return (
    <div className="row current-game">
      <div className="col-md-6 col-sm-12 first-team teams mt-3">
        <img className="backgroundImg" src={zakovat} alt="something" />
        <div className="results">
          <div className="group-name text-white">{data.team1}</div>
          <span className="divider"></span>
          <div className="group-score text-white">{data.score1}</div>
        </div>
      </div>
      <div className="col-md-6 col-sm-12 second-team teams mt-3">
        <img className="backgroundImg" src={zakovat} alt="something" />
        <div className="results">
          <div className="group-name text-white">{data.team2}</div>
          <span className="divider"></span>
          <div className="group-score text-white">{data.score2}</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentGame;
