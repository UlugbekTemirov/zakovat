import * as React from "react";

import BestPlayers from "../components/BestPlayers";
import GameResults from "../components/GameResults";
import ulugbek from "../images/ulugbek.jpg";
import narimon from "../images/newnarimon.jpg";

import AboutZakovat from "../components/AboutZakovat";
import { domainName } from "../global/global";

// const bestPlayers = {
//   description: "some info about player",
//   info: [
//     {
//       name: "Ulugbek Temirov",
//       image: ulugbek,
//       description: "Short introduction about myself",
//       team: "O'zbekona",
//       group: "E-202",
//     },
//     {
//       name: "Narimon Jo'rayev",
//       image: narimon,
//       description: "Hello everybody. I'm bookworm and really like politics",
//       team: "O'zbekona",
//       group: "E-202",
//     },
//   ],
// };

const Home = () => {
  // console.log(bestPlayers);

  return (
    <div className="d-flex justify-content-center row">
      <AboutZakovat />
      <BestPlayers />
      <GameResults />
    </div>
  );
};

export default Home;
