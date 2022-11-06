import { Container } from "@mui/system";
import * as React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "../components/Navbar";

const RouterComp = (props) => {
  return (
    <Router>
<<<<<<< HEAD
      <Navbar setThemeMode={props.setThemeMode} />
=======
      <Navbar />
>>>>>>> 094bca56227a21ecd4072bc38075a967060a3e65
      <Container maxWidth="xl">
        <Routes>{props.children}</Routes>
      </Container>
    </Router>
  );
};

export default RouterComp;
