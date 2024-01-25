import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import AppBar from "components/appBar/Appbar";
import DashBoard from "pages/DashBoard";
import React from "react";
import { Route, Routes } from "react-router-dom";
import darkTheme from '../src/theme'
import './App.css'
import FormBuilder from "pages/FormBuilder";

function App() {
  return (
   <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
     <Box
    >
      <AppBar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/builder" element={<FormBuilder />} />
      </Routes>
    </Box>
   </ThemeProvider>
  );
}

export default App;
