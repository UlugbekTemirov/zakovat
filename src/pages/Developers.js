import * as React from "react";
import DevelopersList from "../components/DevelopersList";
import { domainName } from "../global/global";
import Loader from "../components/Loader";

const Developers = (props) => {
  const { themeMode } = props;
  const [developers, setDevelopers] = React.useState([]);

  React.useEffect(() => {
    fetch(`${domainName}/api/v1/developers/`)
      .then((promise) => promise.json())
      .then((data) => setDevelopers(data));
  }, []);

  if (developers.length == 0) return <Loader themeMode={themeMode} />;

  return (
    <div className="row">
      {developers.map((developer) => (
        <DevelopersList key={developer.name} developer={developer} />
      ))}
    </div>
  );
};

export default Developers;
