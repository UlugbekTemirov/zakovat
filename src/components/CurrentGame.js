import * as React from "react";

import "./CurrentGame.css";
import zakovat from "../images/zakovatImg.jpg";

const CurrentGame = () => {
  return (
    <div className="row current-game">
      <div className="col-md-6 col-sm-12 first-team teams mt-3">
        <img className="backgroundImg" src={zakovat} alt="something" />
        <div className="results">
          <div className="group-name text-white">O'zbekona</div>
          <span className="divider"></span>
          <div className="group-score text-white">8</div>
        </div>
      </div>
      <div className="col-md-6 col-sm-12 second-team teams mt-3">
        <img className="backgroundImg" src={zakovat} alt="something" />
        <div className="results">
          <div className="group-name text-white">Major</div>
          <span className="divider"></span>
          <div className="group-score text-white">5</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentGame;
