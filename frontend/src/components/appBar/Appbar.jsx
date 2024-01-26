import { Box, AppBar, Toolbar, Typography, Avatar } from "@mui/material";
import React from "react";
import Person2Icon from "@mui/icons-material/Person2";
import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigate = useNavigate()
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" sx={{ flexGrow: 1 , fontWeight:'bold' , '&:hover':{cursor:'pointer'} }}
          // onClick={() => navigate('/')}
          >
            Form Builder
          </Typography>
          <Avatar
            sx={{ width: 45, height: 45 }}
            alt="User"
            src={''}
          >
            <Person2Icon />
          </Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Appbar;
