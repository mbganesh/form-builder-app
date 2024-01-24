import { Box } from "@mui/material";
import AppBar from "components/appBar/Appbar";
import DashBoard from "pages/DashBoard";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box
    >
      <AppBar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </Box>
  );
}

export default App;
