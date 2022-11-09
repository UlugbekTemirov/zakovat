import * as React from "react";
import { domainName } from "../global/global";

import UpcomingGameList from "./UpcomingGamesList";

const UpcomingGame = () => {
  const [games, setGames] = React.useState([]);
  React.useEffect(() => {
    fetch(`${domainName}/api/v1/games/?is_finished=false`)
      .then((promise) => promise.json())
      .then((data) => setGames(data));
  }, []);

  if (games.length == 0)
    return (
      <h2 className="text-center text-opacity-50 text-white">
        Hozircha o'yinlar mavjud emas
      </h2>
    );

  //   const game = {
  //     team1: "Major",
  //     team2: "O'zbekona",
  //     date: `${time.getDate()}.${time.getMonth()}.${time.getFullYear()}`,
  //     time: `${time.getHours()}:${time.getMinutes()}:${time.getSeconds}`,
  //   };

  //   const [count, setCount] = React.useState(false);

  //   const gameTime =
  //     +game.date.split(".")[0] * 24 * 3600 +
  //     +game.time.split(":")[0] * 3600 +
  //     +game.time.split(":")[1] * 60 +
  //     +game.time.split(":")[2];

  //   const date = new Date();
  //   const firstTime =
  //     date.getDate() * 24 * 3600 +
  //     date.getHours() * 3600 +
  //     date.getMinutes() * 60 +
  //     date.getSeconds();

  //   const [currentTime, setCurrentTime] = React.useState(firstTime);

  //   const [timeLeft, setTimeLeft] = React.useState(gameTime - currentTime);
  //   const [days, setDays] = React.useState(Math.floor(timeLeft / (3600 * 24)));
  //   const [hours, setHours] = React.useState(Math.floor((timeLeft / 3600) % 24));
  //   const [minutes, setMinutes] = React.useState(
  //     Math.floor((timeLeft / 60) % 60)
  //   );
  //   const [seconds, setSeconds] = React.useState(timeLeft % 60);

  //   React.useEffect(() => {
  //     const date = new Date();
  //     setTimeout(() => {
  //       let newTime =
  //         date.getDate() * 24 * 3600 +
  //         date.getHours() * 3600 +
  //         date.getMinutes() * 60 +
  //         date.getSeconds();

  //       setCurrentTime(newTime);
  //       setTimeLeft(gameTime - currentTime);
  //       setDays(Math.floor(timeLeft / (3600 * 24)));
  //       setHours(Math.floor((timeLeft / 3600) % 24));
  //       setMinutes(Math.floor((timeLeft / 60) % 60));
  //       setSeconds(timeLeft % 60);
  //       setCount(!count);
  //     }, 1000);
  //   }, [currentTime, count]);

  //   console.log(days, hours, minutes, seconds);

  return games.map(
    (game) =>
      !game.is_finished && (
        <UpcomingGameList key={game.team1 + game.team2} game={game} />
      )
  );
  //   } else return <h1>No Current Games Found</h1>;
};

export default UpcomingGame;
