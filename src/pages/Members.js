import * as React from "react";
import MembersList from "../components/MembersList";
import { domainName } from "../global/global";

const Members = () => {
  const [data, setData] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const searchHandler = React.useRef();
  const onButtonClick = () => {
    setSearch(searchHandler.current.value);
  };

  React.useEffect(() => {
    fetch(`${domainName}/api/v1/members/`)
      .then((promise) => promise.json())
      .then((data) => setData(data));
  }, []);

  if (data.length == 0)
    return <h1 className="text-center mt-5">Yuklanyapti...</h1>;

  return (
    <ul className="members-list p-0">
      <h1 className="text-center text-goldish mt-lg-5 mt-3">Ishtirokchilar</h1>
      <div className="text-center my-4">
        <input type="search" ref={searchHandler} />
        <button onClick={onButtonClick}>Search</button>
      </div>
      {data.map(
        (member, id) =>
          member.full_name.toLowerCase().includes(search.toLowerCase()) && (
            <MembersList key={id} member={member} />
          )
      )}
    </ul>
  );
};

export default Members;
