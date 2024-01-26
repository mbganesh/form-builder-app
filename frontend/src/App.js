import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import AppBar from "components/appBar/Appbar";
import DashBoard from "pages/DashBoard";
import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import FormBuilder from "pages/FormioBuilder";
import SignInSide from "pages/SignIn";
import SignUp from "pages/SignUp";
const { createTheme } = require("@mui/material");

function App() {
  let location = useLocation();

  const [pageTheme, setPageTheme] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: pageTheme ? "dark" : "light",
    },
    typography: {
      fontFamily: ["Playpen Sans", "cursive"].join(","),
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        {/* {location.pathname !== "/login" ? <Appbar /> : null} */}
        <AppBar  />

        <Routes>
          <Route
            path="/"
            element={<SignInSide setPageTheme={setPageTheme} />}
          />
          <Route
            path="/home"
            element={<DashBoard setPageTheme={setPageTheme} />}
          />
          <Route
            path="/sign-in"
            element={<SignInSide setPageTheme={setPageTheme} />}
          />
          <Route
            path="/sign-up"
            element={<SignUp setPageTheme={setPageTheme} />}
          />
          {/* <Route path="/builder" element={<Builder />} /> */}
          <Route
            path="/builder"
            element={<FormBuilder setPageTheme={setPageTheme} />}
          />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;

// https://codesandbox.io/examples/package/react-form-builder2

// https://codesandbox.io/p/sandbox/react-form-builders-playground-2pbhid?file=%2Fsrc%2Fconsts.js
