import * as React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

<<<<<<< HEAD
const DarkTheme = (props) => {
  const darkTheme = createTheme({
    palette: {
      mode: props.themeMode,
    },
  });
=======
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const DarkTheme = (props) => {
>>>>>>> 094bca56227a21ecd4072bc38075a967060a3e65
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default DarkTheme;
