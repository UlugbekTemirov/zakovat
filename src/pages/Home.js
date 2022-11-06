import * as React from "react";
import BestPlayer from "../components/BestPlayer";
import LastGameResults from "../components/LastGameResults";

import ulugbek from "../images/ulugbek.jpg";
import narimon from "../images/narimon.jpg";

const BEST_PLAYER = [
  {
    name: "Ulugbek Temirov",
    image: ulugbek,
    description: "Short introduction about myself",
    team: "O'zbekona",
    group: "E-202",
  },
  {
    name: "Narimon jo'rayev",
    image: narimon,
    description: "Hello everybody. I'm bookworm and really like politics",
    team: "O'zbekona",
    group: "E-202",
  },
];

const Home = () => {
  return (
    <div className="d-flex justify-content-center row">
      <h1 className="mt-4 mb-0 text-center text-warning">Best Players</h1>
      {BEST_PLAYER.map((bestPlayer, id) => (
        <BestPlayer key={id} bestPlayer={bestPlayer} />
      ))}
      {/* <LastGameResults /> */}
    </div>
  );
};

export default Home;
