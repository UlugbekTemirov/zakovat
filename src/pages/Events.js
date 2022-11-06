import * as React from "react";
import TableComp from "../components/TableComp";
import { DUMMY_DATA } from "../global/global";
import { GROUP_DIVITION } from "../global/global";

// console.log(GROUP_DIVITION[0].A.includes("zl1"));

// console.log(
//   GROUP_DIVITION.map((item) => DUMMY_DATA.map((id) => item.A.includes(id.id)))
// ); // ["zl1", "zl2", "zl3", "zl4"]

const groups = [
  ["iwcb", "decwin", "aecvi", "afeorv"],
  ["iwcb", "decwin", "aecvi", "afeorv"],
  ["iwcb", "decwin", "aecvi", "afeorv"],
  ["iwcb", "decwin", "aecvi", "afeorv"],
];

const Events = () => {
  return (
    <div className="row">
      {groups.map((group) => (
        <TableComp group={group} />
      ))}
    </div>
  );
};

export default Events;
