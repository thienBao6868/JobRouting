import React from "react";
import SearchAppBar from "./components/SearchAppBar";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import DetailPage from "./pages/DetailPage";
import SignInPage from "./pages/SignInPage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="signInPage" element={<SignInPage />} />
        <Route path="pageDetail/:id" element={<DetailPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
