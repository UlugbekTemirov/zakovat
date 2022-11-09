import * as React from "react";
import DevelopersList from "../components/DevelopersList";
import { domainName } from "../global/global";

const Developers = () => {
  const [developers, setDevelopers] = React.useState([]);

  React.useEffect(() => {
    fetch(`${domainName}/api/v1/developers/`)
      .then((promise) => promise.json())
      .then((data) => setDevelopers(data));
  }, []);

  if (developers.length == 0)
    return <h1 className="text-center mt-5">Yuklanyapti...</h1>;

  return (
    <div className="row">
      {developers.map((developer) => (
        <DevelopersList key={developer.name} developer={developer} />
      ))}
    </div>
  );
};

export default Developers;
