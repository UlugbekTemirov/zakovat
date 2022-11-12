import * as React from "react";
import CurrentGame from "../components/CurrentGame";
import Loader from "../components/Loader";
import { domainName } from "../global/global";

const LiveShare = () => {
  const [data, setData] = React.useState([]);
  React.useState(() => {
    fetch(`${domainName}/api/v1/youtube-link/`)
      .then((promise) => promise.json())
      .then((data) => setData(data));
  }, []);

  if (data.link === "")
    return (
      <h1 className="text-danger text-center text-opacity-75 mt-5">
        Hozirda mavjud o'yinlar topilmadi
      </h1>
    );

  return (
    <>
      <h1 className="text-center mb-3 mt-5">{data.description}</h1>
      <div className="d-flex justify-content-center mt-5">
        <iframe
          width="100%"
          height="700"
          src={data.link}
          title="Zakovat o'yinlari"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <CurrentGame />
    </>
  );
};

export default LiveShare;

{
  /* <iframe width="560" height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
}
