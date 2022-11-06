import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(team, games, score) {
  return { team, games, score };
}
// const countFunc = () => {
//   const groupLetters = ["A", "B", "C", "D"];
//   const [count, setCount] = React.useState(0);
//   setCount();
//   return groupLetter[count];
// };

export default function RankingComp(props) {
  const groups = Object.keys(props.teams);

  // if (count <= 3) setCount(count + 1);

  // React.useState(() => {
  //   countFunc();
  // }, [group]);

  // console.log(group[`${groupLetters[count]}`]);
  // const [group, setGroup] = React.useState([props.teams.keys()]);

  // React.useEffect(() => {
  //   setGroup((prev) => [...prev, props.teams.keys()]);
  // }, [props]);

  // console.log(group);
  // const score = [props.teams[`${groups[0]}`][0], props.teams[`${groups[1]}`][0], props.teams[`${groups[1]}`][0]];
  let games = [];
  let scores = [];
  for (let i = 0; i <= 3; i++) {
    games.push(props.teams[`${groups[i]}`][0]);
    scores.push(props.teams[`${groups[i]}`][1]);
  }

  const rows = [
    createData(groups[0], games[0], scores[0]),
    createData(groups[1], games[1], scores[1]),
    createData(groups[2], games[2], scores[2]),
    createData(groups[3], games[3], scores[3]),
  ];
  games = [];
  scores = [];
  return (
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
      <TableContainer
        sx={{ mt: 5, borderRadius: "20px", maxWidth: 350 }}
        component={Paper}
      >
        <h2 className="text-warning text-center mt-3">Group {props.name}</h2>
        <Table sx={{}} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Teams</StyledTableCell>
              <StyledTableCell align="right">Games</StyledTableCell>
              <StyledTableCell align="right">Scores</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.team}>
                <StyledTableCell component="th" scope="row">
                  {row.team}
                </StyledTableCell>
                <StyledTableCell align="right">{row.games}</StyledTableCell>
                <StyledTableCell align="right">{row.score}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
