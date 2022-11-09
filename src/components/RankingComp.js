import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

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

function createData(team, games, score, slug) {
  return { team, games, score, slug };
}

export default function RankingComp(props) {
  const groups = Object.keys(props.teams);

  let games = [];
  let scores = [];
  let slugs = [];
  for (let i = 0; i <= 3; i++) {
    games.push(props.teams[`${groups[i]}`]["games"]);
    scores.push(props.teams[`${groups[i]}`]["score"]);
    let a = groups[i].toLowerCase();
    let b, slug;
    if (a.includes(" ")) {
      b = a.split(" ");
      slug = `${b[0]}-${b[1]}`;
    } else if (a.includes("'")) {
      b = a.split("'");
      let x = "";
      for (let i = 0; i < b.length; i++) {
        x += b[i];
      }
      slug = x;
    } else {
      slug = a;
    }
    slugs.push(slug);
  }

  const rows = [
    createData(groups[0], games[0], scores[0], slugs[0]),
    createData(groups[1], games[1], scores[1], slugs[1]),
    createData(groups[2], games[2], scores[2], slugs[2]),
    createData(groups[3], games[3], scores[3], slugs[3]),
  ];
  games = [];
  scores = [];
  return (
    <>
      <div className="col-xl-3 col-md-6 col-sm-12 d-flex justify-content-center">
        <TableContainer
          sx={{
            mt: 5,
            borderRadius: "20px",
            maxWidth: 350,
            fontFamily: "SpaceMono",
          }}
          component={Paper}
        >
          <h2 className="text-warning text-center mt-3">{props.name} guruh</h2>
          <Table sx={{}} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell sx={{ fontFamily: "SpaceMono" }}>
                  Jamoalar
                </StyledTableCell>
                <StyledTableCell sx={{ fontFamily: "SpaceMono" }} align="right">
                  O'yin
                </StyledTableCell>
                <StyledTableCell sx={{ fontFamily: "SpaceMono" }} align="right">
                  Natija
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.team}>
                  <StyledTableCell
                    sx={{ fontFamily: "SpaceMono" }}
                    component="th"
                    scope="row"
                  >
                    <Link
                      className="text-decoration-none"
                      to={`/teams/${row.slug}`}
                    >
                      {row.team}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{ fontFamily: "SpaceMono" }}
                    align="right"
                  >
                    {row.games}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{ fontFamily: "SpaceMono" }}
                    align="right"
                  >
                    {row.score}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
