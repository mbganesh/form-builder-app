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
import React, { useLayoutEffect, useState } from "react";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import MergeTypeIcon from "@mui/icons-material/MergeType";
import UserStats from "components/dashBoard/UserStats";
import styled from "@emotion/styled";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import { useLocation, useNavigate } from "react-router-dom";
import EditNoteIcon from "@mui/icons-material/EditNote";
import useIdStore from "../store/index";
import { useCreateForm, useFormList } from "ApiHelper";

const CreateBox = styled(Box)(({ theme, bgColor, hColor, color }) => ({
  minWidth: "20%",
  height: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: color ?? "#",
  border: "3px dotted grey",
  borderRadius: "10px",
  backgroundColor: bgColor ? bgColor : "transparent",
  "&:hover": {
    cursor: "pointer",
    background: hColor ? hColor : "",
    transition: "0.2s linear",
    color: "white",
    borderStyle: "solid",
  },

  [theme.breakpoints.down("sm")]: {
    minWidth: "100%",
  },
  [theme.breakpoints.up("md")]: {
    minWidth: "35%",
  },
  [theme.breakpoints.up("lg")]: {
    minWidth: "30%",
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
const DashBoard = ({ setPageTheme }) => {
  const { userId } = useIdStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const CreateFormMutation = useCreateForm();
  const { data: formList } = useFormList({ userId: userId });

  const handleFormCreateBtn = async () => {
    // setFormOpen(true)
    if (formData.title && formData.description && userId) {
      const userData = {
        userId: userId,
        title: formData.title,
        description: formData.description,
      };
      let result = await CreateFormMutation.mutateAsync(userData);

      navigate("/builder", {
        state: { _id: result?.data?.data?._id, title: formData.title },
      });
      // navigate("/builder", { state: formData });
    }
  };

  const handleFormCardBtn = (id, title) => {
    navigate("/builder", {
      state: { _id: id, title: title },
    });
  };

  useLayoutEffect(() => {
    setPageTheme(true);
    if (!userId) {
      navigate("/");
      return;
    }
  }, []);

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

        <Divider sx={{ margin: "30px", background: "grey" }} />

        <Typography variant="h3" textAlign={"center"}>
          {" "}
          Your Forms{" "}
        </Typography>

        <Divider sx={{ margin: "30px", background: "grey" }} />

        <Stack direction="row" gap={2} flexWrap="wrap">
          <CreateBox
            bgColor="#054718"
            hColor="#011c09"
            color="grey"
            onClick={() => setFormOpen(true)}
          >
            <CreateNewFolderIcon fontSize="large" />
            <Typography variant="h5">Create a new form</Typography>
          </CreateBox>

          {formList?.data?.data.map(({ _id, title, description, userId }) => (
            <CreateBox
              key={_id}
              bgColor="#5B5C5C"
              hColor="#181818"
              color="#A4a6a4"
            >
              <Typography variant="h6">{title}</Typography>
              <Typography variant="body2">{description}</Typography>
              <Button
                onClick={() => handleFormCardBtn(_id, title)}
                startIcon={<EditNoteIcon />}
                fullWidth
                sx={{ mt: "10px", color: "#fff", textTransform: "none" }}
                color="success"
                variant="contained"
              >
                {" "}
                Edit Form{" "}
              </Button>
            </CreateBox>
          ))}
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
            value={formData.title}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                title: e.target.value,
              }))
            }
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
            value={formData.description}
            onChange={(e) =>
              setFormData((prevState) => ({
                ...prevState,
                description: e.target.value,
              }))
            }
          />

          <Button
            fullWidth
            variant="contained"
            sx={{
              margin: "10px 0px",
              textDecoration: "none",
            }}
            onClick={() => handleFormCreateBtn()}
          >
            Save
          </Button>
        </Paper>
      </Modal>
    </>
  );
};

export default DashBoard;
