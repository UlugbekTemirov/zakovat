import * as React from "react";

import "./AboutZakovat.css";

const AboutZakovat = () => {
  return (
    <div className="row about-zakovat">
      <div className="col-12 d-flex align-items-center p-0">
        <div className="about-content">
          <h1 className="text-center">
            Ajou universiteti <br className="d-lg-none" /> "Zakovat Ligasi"
            <br className="d-lg-none" /> 2-mavsum
          </h1>
          <p className="text-center mt-lg-5">
            Toshkent shahridagi Ajou universiteti Zakovat klubi Zakovat ligasi
            2-mavsum o'yinlarini ochiq deb e'lon qiladi!
          </p>
        </div>
      </div>
      <div className="col-12 d-flex align-items-lg-start justify-content-center p-0">
        <iframe
          width="60%"
          height="350px"
          src="https://www.youtube.com/embed/6tnvvRk6TPU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default AboutZakovat;
