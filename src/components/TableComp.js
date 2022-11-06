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

export default function TableComp({ group }) {
  const rows = [
    createData(group[0], 0, 0),
    createData(group[1], 0, 0),
    createData(group[2], 0, 0),
    createData(group[3], 0, 0),
  ];
  return (
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
      <TableContainer sx={{ mt: 5, borderRadius: "20px" }} component={Paper}>
        <h2 className="text-warning text-center mt-3">Group A</h2>
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
              <StyledTableRow key={row.name}>
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
