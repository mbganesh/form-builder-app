import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import styled from "@emotion/styled";

const CreateBox = styled(Box)(({ theme }) => ({
  minWidth: "35%",
  height: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "grey",
  border: "3px dotted grey",
  borderRadius: "10px",
  backgroundColor: "pink",
  // backgroundColor: "transparent",
  "&:hover": {
    cursor: "pointer",
    background: "green",
    transition: "0.2s linear",
    color: "white",
    borderStyle: "solid",
  },

  // [theme.breakpoints.down("sm")]: {
  //   minWidth: "100%",
  // },
  // [theme.breakpoints.up("md")]: {
  //   minWidth: "35%",
  // },
  // [theme.breakpoints.up("lg")]: {
  //   minWidth: "20%",
  // },
}));
const FormList = () => {
  return (
    <Box>
      <CreateBox>
        <CreateNewFolderIcon fontSize="large" />
        <Typography variant="h5">Create a new form</Typography>
      </CreateBox>
    </Box>
  );
};

export default FormList;
