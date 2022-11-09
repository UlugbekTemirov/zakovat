import * as React from "react";
import DevelopersList from "../components/DevelopersList";
import { domainName } from "../global/global";

// const developers = [
//   {
//     name: "Ulug'bek Temirov",
//     group: "E-202",
//     university: "Ajou university",
//     role: "frontend",
//     image: "rasmim linki",
//     description: "Short intro about developer",
//     site: "https://www.ulugbek.tech/",
//     telegram: "https://t.me/TemirovUlugbek",
//     instagram: "https://instagram.com/ulugbek.exe",
//     github: "https://github.com/UlugbekTemirov",
//   },
//   {
//     name: "Abdusamad Malikov",
//     group: "E-203",
//     university: "Ajou university",
//     role: "backend",
//     image: "abdusamamni rasmi keladi",
//     description: "short info about developer",
//     site: "https://www.abdusamad.uz/",
//     telegram: "https://telegram.me/yomon_jiyan",
//     instagram: "https://instagram.com/lol_malikov",
//     github: "https://github.com/sevbo2003",
//   },
// ];

const Developers = () => {
  const [developers, setDevelopers] = React.useState([]);

  React.useEffect(() => {
    fetch(`${domainName}/api/v1/developers/`)
      .then((promise) => promise.json())
      .then((data) => setDevelopers(data));
  }, []);

  return (
    <div className="row">
      {developers.map((developer) => (
        <DevelopersList key={developer.name} developer={developer} />
      ))}
    </div>
  );
};

export default Developers;
