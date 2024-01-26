import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import PreviewIcon from "@mui/icons-material/Preview";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import styled from "@emotion/styled";

const BuilderHeader = ({ formName,  }) => { //  formStoreFn
  const HeaderButton = styled(Button)(({ theme }) => ({
    textTransform: "none",
    margin: "1px 3px",
    color: "white",
    borderColor: "transparent",
    backgroundColor: "#696969",
    "&:hover": {
      borderColor: "grey",
      color: "#fff",
    },
  }));

  const HeaderAppBar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-evenly",
      alignItems: "center",
      flexWrap: "wrap",
    },
  }));

  return (
    <Box>
      <AppBar position="relative" elevation={1}>
        <HeaderAppBar>
          <Typography variant="h5">
            Form : <span style={{ fontWeight: "bold" }}>{formName}</span>{" "}
          </Typography>

          <Box sx={{ flexWrap: "nowrap" }}>
            <HeaderButton variant="outlined" startIcon={<PreviewIcon />}>
              Preview
            </HeaderButton>

            <HeaderButton
              variant="contained"
              startIcon={<CloudUploadIcon />}
              // onClick={formStoreFn}
            >
              Publish
            </HeaderButton>
          </Box>
        </HeaderAppBar>
      </AppBar>
    </Box>
  );
};

export default BuilderHeader;
