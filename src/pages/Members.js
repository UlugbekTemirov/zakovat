import * as React from "react";
import MembersList from "../components/MembersList";

const Members = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/api/v1/members/")
      .then((promise) => promise.json())
      .then((data) => setData(data));
  }, []);

  return (
    <ul>
      <h1>Members</h1>
      {data.map((member) => (
        <MembersList member={member} />
      ))}
    </ul>
  );
};

export default Members;
