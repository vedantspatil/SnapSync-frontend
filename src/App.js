import { useMemo, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import HomePage from "scenes/homepage";
import LoginPage from "scenes/loginpage";
import ProfilePage from "scenes/profilepage";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";

import React from "react";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <HashRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile/:userId" element={<ProfilePage />} />
          </Routes>
        </ThemeProvider>
      </HashRouter>
    </div>
  );
}

export default App;
