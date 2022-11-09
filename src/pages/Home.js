import * as React from "react";

import BestPlayers from "../components/BestPlayers";
import GameResults from "../components/GameResults";

import AboutZakovat from "../components/AboutZakovat";

const Home = () => {
  return (
    <div className="d-flex justify-content-center row">
      <AboutZakovat />
      <BestPlayers />
      <GameResults targetData={""} />
    </div>
  );
};

export default Home;
