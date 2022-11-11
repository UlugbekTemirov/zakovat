import * as React from "react";
import CurrentGame from "../components/CurrentGame";

const LiveShare = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <iframe
          width="100%"
          height="700"
          src="https://www.youtube.com/embed/04rO9kKruTM"
          title="Zakovat o'yinlari"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {/* <CurrentGame /> */}
    </>
  );
};

export default LiveShare;

{
  /* <iframe width="560" height="315" src="https://www.youtube.com/embed/04rO9kKruTM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
}
