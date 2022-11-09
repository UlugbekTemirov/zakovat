import * as React from "react";
import MembersList from "../components/MembersList";
import { domainName } from "../global/global";

const Members = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch(`${domainName}/api/v1/members/`)
      .then((promise) => promise.json())
      .then((data) => setData(data));
  }, []);

  return (
    <ul>
      <h1>Members</h1>
      {data.map((member, id) => (
        <MembersList key={id} member={member} />
      ))}
    </ul>
  );
};

export default Members;
