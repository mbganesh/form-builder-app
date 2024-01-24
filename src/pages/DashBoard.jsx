import {
  Box,
  Button,
  Divider,
  Modal,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import MergeTypeIcon from "@mui/icons-material/MergeType";
import UserStats from "components/dashBoard/UserStats";
import FormList from "components/dashBoard/FormList";
import styled from "@emotion/styled";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";

const CreateBox = styled(Box)(({ theme }) => ({
  minWidth: "500px",
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

const statsArr = [
  {
    title: "Total visits",
    description: "All time form visits",
    icon: <ViewCompactIcon />,
    color: "blue",
  },
  {
    title: "Total submissions",
    description: "All time form submissions",
    icon: <CalendarViewMonthIcon />,
    color: "orange",
  },
  {
    title: "Submission rate",
    description: "Visits that result in form submission",
    icon: <MultipleStopIcon />,
    color: "green",
  },
  {
    title: "Bounce rate",
    description: "Visits that leaves without interacting",
    icon: <MergeTypeIcon />,
    color: "red",
  },
];
const DashBoard = () => {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          width: "90%",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "10px",
            justifyContent: "center",
            alignItems: "self-end",
          }}
        >
          {statsArr.map(({ title, description, icon, color }) => (
            <UserStats
              title={title}
              description={description}
              icon={icon}
              color={color}
            />
          ))}
        </Box>

        <Divider sx={{ margin: "30px", background: "red" }} />

        <Typography variant="h3"> Your Forms </Typography>

        <Divider sx={{ margin: "30px", background: "red" }} />

        <Stack direction="row" gap={2} flexWrap="wrap">
          <CreateBox onClick={() => setFormOpen(true)}>
            <CreateNewFolderIcon fontSize="large" />
            <Typography variant="h4">Create a new form</Typography>
          </CreateBox>

          {/* Others */}
          <FormList />
        </Stack>
      </Box>

      <Modal open={formOpen} onClose={() => setFormOpen(false)}>
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create form
          </Typography>
          <Typography id="modal-modal-description" sx={{ mb: 2 }}>
            Create a new form to start collecting responses
          </Typography>

          <TextField
            required
            sx={{
              margin: "10px 0px",
            }}
            id="name"
            label="Name"
            fullWidth
            placeholder="Enter Form Name"
          />

          <TextField
            required
            sx={{
              margin: "10px 0px",
            }}
            id="description"
            label="Description"
            fullWidth
            placeholder="Enter Form Description"
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              margin: "10px 0px",
              textDecoration: "none",
            }}
          >
            Save
          </Button>
        </Paper>
      </Modal>
    </>
  );
};

export default DashBoard;