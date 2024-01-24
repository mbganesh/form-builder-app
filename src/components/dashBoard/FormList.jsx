import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import styled from "@emotion/styled";

const CreateBox = styled(Paper)(({ theme }) => ({
  width: "500px",
  height: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "grey",
  border: "3px dotted grey",
  borderRadius: "10px",
  backgroundColor: "transparent",
  "&:hover": {
    cursor: "pointer",
    background: "green",
    transition: "0.2s linear",
    color: "white",
    borderStyle: "solid",
  },
}));

const FormList = () => {
  return (
    <Box>
      <CreateBox>
        <CreateNewFolderIcon fontSize="large" />
        <Typography variant="h4">Create a new form</Typography>
      </CreateBox>
    </Box>
  );
};

export default FormList;
