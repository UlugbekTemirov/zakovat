import React from "react";

const MembersList = ({ member }) => {
  return (
    <li key={member.full_name}>
      {member.full_name} ------------ {member.team[0]}
    </li>
  );
};

export default MembersList;
