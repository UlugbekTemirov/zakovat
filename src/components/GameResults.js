import * as React from "react";
import GameResultsList from "./GameResultsList";
import { domainName } from "../global/global";

// const RESULT_DATA = [
//   {
//     id: 0,
//     winner: "Team Crown",
//     looser: "Major",
//     scoreW: 9,
//     scoreL: 6,
//   },
//   {
//     id: 1,
//     winner: "O'zbekona",
//     looser: "Olimp",
//     scoreW: 8,
//     scoreL: 4,
//   },
//   {
//     id: 2,
//     winner: "Boysovskiy klub",
//     looser: "Buxorolik tog'olar",
//     scoreW: 7,
//     scoreL: 6,
//   },
//   {
//     id: 3,
//     winner: "Bakorchilar",
//     looser: "Something",
//     scoreW: 10,
//     scoreL: 3,
//   },
// ];

const GameResults = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(`${domainName}/api/v1/results/`)
      .then((promise) => promise.json())
      .then((data) => setData(data));
  }, []);

  // const data = [
  //   {
  //     game: "Team 6 - Team Crown",
  //     draw: true,
  //     score1: 4,
  //     score2: 4,
  //   },
  //   {
  //     game: "Team 4 - Team Crown",
  //     winner: "Team Crown",
  //     loser: "Team 4",
  //     score1: 4,
  //     score2: 3,
  //   },
  //   {
  //     game: "Bots - Team Crown",
  //     winner: "Bots",
  //     loser: "Team Crown",
  //     score1: 8,
  //     score2: 5,
  //   },
  //   {
  //     game: "Team Crown - O'zbekona",
  //     winner: "Team Crown",
  //     loser: "O'zbekona",
  //     score1: 6,
  //     score2: 5,
  //   },
  // ];

  if (data.length == 0) return;
  // <h1>No result Found</h1>;

  return (
    <>
      <h1 className="text-center text-warning mt-3">Game Results</h1>
      <div className="row">
        {data.map((gameResults) => (
          <GameResultsList key={gameResults.game} gameResults={gameResults} />
        ))}
      </div>
    </>
  );
};

export default GameResults;
