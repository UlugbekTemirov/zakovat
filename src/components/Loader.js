import * as React from "react";
import "./Loader.css";

const Loader = (props) => {
  const { themeMode } = props;
  return (
    <div className={`loader-box ${themeMode === "light" && "loader-light"}`}>
      <div class="lds-hourglass"></div>
    </div>
  );
};

export default Loader;
