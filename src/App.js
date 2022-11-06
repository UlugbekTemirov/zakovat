import * as React from "react";
import { Navigate, Route } from "react-router-dom";

import "./App.css";

// components

// UI
import RouterComp from "./UI/RouterComp";
import DarkTheme from "./UI/DarkTheme";

// pages
import Teams from "./pages/Teams";
import Home from "./pages/Home";
<<<<<<< HEAD
import Events from "./pages/Events";
import Members from "./pages/Members";

function App() {
  const [themeMode, setThemeMode] = React.useState("dark");
  console.log(themeMode);
  return (
    <DarkTheme themeMode={themeMode}>
      <RouterComp setThemeMode={setThemeMode}>
        <Route path="/home" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/events" element={<Events />} />
        <Route path="/members" element={<Members />} />
=======

function App() {
  return (
    <DarkTheme>
      <RouterComp>
        <Route path="/home" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
>>>>>>> 094bca56227a21ecd4072bc38075a967060a3e65
        <Route path="*" element={<Navigate to="/home" replace={true} />} />
      </RouterComp>
    </DarkTheme>
  );
}

export default App;
