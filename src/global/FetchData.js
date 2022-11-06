import React, { useState } from "react";

const [data, setData] = useState([]);

const FetchData = () => {
  fetch("http://127.0.0.1:8000/api/v1/teams/")
    .then((promise) => promise.json())
    .then((data) => setData(data));

  return data;
};

export default FetchData;
