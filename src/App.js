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
import LiveShare from "./pages/LiveShare";
import Developers from "./pages/Developers";
import GamesList from "./components/GamesList";

function App() {
  const [themeMode, setThemeMode] = React.useState("dark");

  return (
    <DarkTheme themeMode={themeMode}>
      <RouterComp setThemeMode={setThemeMode}>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams themeMode={themeMode} />} />
        <Route path="/events" element={<Events themeMode={themeMode} />} />
        <Route path="/members" element={<Members themeMode={themeMode} />} />
        <Route path="/liveshare" element={<LiveShare />} />
        <Route
          path="/developers"
          element={<Developers themeMode={themeMode} />}
        />
        <Route
          path="/teams/:teamSlug"
          element={<GamesList themeMode={themeMode} />}
        />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </RouterComp>
    </DarkTheme>
  );
}

export default App;
