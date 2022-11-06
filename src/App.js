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
import Events from "./pages/Events";
import Members from "./pages/Members";

function App() {
  const [themeMode, setThemeMode] = React.useState("dark");
  // const [isLoading, setIsLoading] = React.useState(true);

  // setTimeout(setIsLoading(false), 1000);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // } else
  return (
    <DarkTheme themeMode={themeMode}>
      <RouterComp setThemeMode={setThemeMode}>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/events" element={<Events />} />
        <Route path="/members" element={<Members />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </RouterComp>
    </DarkTheme>
  );
}

export default App;
