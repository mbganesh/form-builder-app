import React, { useLayoutEffect, useState } from "react";
import { FormBuilder as FormBuilderIo, Formio } from "react-formio";
import { formIoData } from "./consts";
import "./styles.css";
import "react-form-builder2/dist/app.css";
import "formiojs/dist/formio.full.css";
import { Box, Button, Paper, ThemeProvider, Typography } from "@mui/material";
import BuilderHeader from "components/formBuilder/BuilderHeader";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useSaveForm, useSingleForm } from "ApiHelper";
import { toast } from "react-toastify";

const HeaderButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  // margin: "1px 3px",
  color: "white",
  borderColor: "transparent",
  backgroundColor: "#696969",
  "&:hover": {
    borderColor: "grey",
    color: "#fff",
  },
}));

export default function App({ setPageTheme }) {
  const navigate = useNavigate();
  // const [preview, togglePreview] = useState(false);

  const location = useLocation().state;

  const GetFormMutation = useSingleForm();
  const [data, setData] = useState({});

  const getInitFormData = async () => {
    let result = await GetFormMutation.mutateAsync({
      _id: location.id,
    });

    if (result?.data?.status) {
      setFormData(result?.data?.data);
      return;
    }
  };

  console.log("locationlocation", location);
  const [formData, setFormData] = useState({}); // formIoData
  const UpdateFormMutation = useSaveForm();

  const printResult = () => {
    Formio.createForm(document.getElementById("formio-result"), {
      components: formData.components,
    }).then((form) => {
      console.log(form.component.components);
      form.on("submit", (data) => console.log("submit", data));
    });
  };

  const handleSaveBtn = async () => {
    const userData = {
      _id: location.id,
      formDetail: data,
    };
    let result = await UpdateFormMutation.mutateAsync(userData);

    if (result?.data?.status) {
      setTimeout(() => {
        navigate("/home");
      }, 800);
      // updateUserId(result?.data?.data?._id);
      toast.success(result?.data?.message);
    } else {
      toast.error(result?.data?.message);
    }
  };

  useLayoutEffect(() => {
    setPageTheme(false);
    getInitFormData()
  }, []);

  return (
    <Box className="App">
      <BuilderHeader
        formName={location?.title ?? "Autonomous"}
        formDetail={data}
        formStoreFn={printResult}
      />

      <Box
        sx={{
          p: 2,
        }}
      >
        <Paper sx={{ m: "auto", width: "30%", p: 3 }} elevation={3}>
          <HeaderButton
            variant="contained"
            startIcon={<CloudUploadIcon />}
            onClick={() => {
              handleSaveBtn();
            }}
          >
            Save
          </HeaderButton>
        </Paper>
        <FormBuilderIo
          form={formIoData}
          onChange={(schema) => {
            setData(schema);
            console.log("schema", schema);
            // setFormData(schema)
          }}
          onSubmit={(data) => {
            console.log(data);
          }}
          saveForm={(data) => setFormData(data)}
          saveText="Save Form"
          onSubmitDone={(data) => console.log(data)}
        />
        <Box style={{ display: "none" }}>
          <Box id="formio-result" />
        </Box>
      </Box>
    </Box>
  );
}
