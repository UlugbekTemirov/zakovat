import { Container } from "@mui/system";
import * as React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";

const RouterComp = (props) => {
  return (
    <Router>
      <Navbar setThemeMode={props.setThemeMode} />
      <Container maxWidth="xl">
        <Routes>{props.children}</Routes>
      </Container>
    </Router>
  );
};

export default RouterComp;
