import styled from "@emotion/styled";
import { Box, Icon, Paper, Typography } from "@mui/material";
import React from "react";

const DashBoardDiv = styled(Paper)(({ theme, color }) => ({
  minWidth: "350px",
  padding: "15px 6px",
  margin: "5px 15px ",
  display: "flex",
  justifyContent: "space-between",
  border: `2px solid ${color}`,
  borderRadius: 4,
  flex:'1',
  boxShadow: `3px 4px 4px ${color}`,
}));

const UserStats = ({ title, description, icon, color }) => {
  console.log("title", color);
  return (
    <DashBoardDiv elevation={5} color={color}>
      <Box>
        <Typography variant="subtitle1" fontWeight="bold" color="grey">
          {title}
        </Typography>
        <Typography variant="h4" fontWeight="bolder">
          {0 ?? 0}
        </Typography>
        <Typography variant="body1" fontWeight="light" color="grey">
          {description}
        </Typography>
      </Box>
      <Icon>{icon}</Icon>
    </DashBoardDiv>
  );
};

export default UserStats;
