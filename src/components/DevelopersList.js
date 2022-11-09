import * as React from "react";

// icons

import telegram from "../icons/telegram.png";
import instagram from "../icons/instagram.png";
import github from "../icons/github.png";

import "./DevelopersList.css";

const DevelopersList = (props) => {
  const { developer } = props;
  return (
    <div className="col-lg-6 d-flex justify-content-center developer-container mt-4">
      <div className="developer-card">
        <div className="content-card d-flex align-items-center">
          <div className="content">
            <h3>{developer.university}</h3>
            <h3>{developer.role}</h3>
            <h3>{developer.description}</h3>
            <div className="social-icons row mt-5">
              <div className="col-4 socials">
                <a
                  target="_blank"
                  className="d-flex justify-content-center"
                  href={developer.instagram}
                >
                  <img className="w-50" src={instagram} alt="instagram" />
                </a>
              </div>
              <div className="col-4 socials">
                <a
                  target="_blank"
                  className="d-flex justify-content-center"
                  href={developer.telegram}
                >
                  <img className="w-50" src={telegram} alt="telegram" />
                </a>
              </div>
              <div className="col-4 socials">
                <a
                  target="_blank"
                  className="d-flex justify-content-center"
                  href={developer.github}
                >
                  <img className="w-50" src={github} alt="github" />
                </a>
              </div>
            </div>
            <h3 className="mt-5">
              <a href={developer.site}>
                {developer.site.slice(8, developer.site.length - 1)}
              </a>
            </h3>
          </div>
        </div>
        <img
          className="developer-image"
          alt={developer.name}
          src={developer.image}
        />
        <h3 className="my-3">{developer.name}</h3>
      </div>
    </div>
  );
};

export default DevelopersList;
