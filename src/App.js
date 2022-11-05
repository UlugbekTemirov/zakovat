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

function App() {
  return (
    <DarkTheme>
      <RouterComp>
        <Route path="/home" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="*" element={<Navigate to="/home" replace={true} />} />
      </RouterComp>
    </DarkTheme>
  );
}

export default App;
