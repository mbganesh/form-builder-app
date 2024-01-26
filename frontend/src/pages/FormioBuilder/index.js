import React, { useLayoutEffect, useState } from "react";
import { FormBuilder as FormBuilderIo, Formio } from "react-formio";
import { formIoData } from "./consts";
import "./styles.css";
import "react-form-builder2/dist/app.css";
import "formiojs/dist/formio.full.css";
import { Box, Button, ThemeProvider, Typography } from "@mui/material";
import BuilderHeader from "components/formBuilder/BuilderHeader";
import { useLocation } from "react-router-dom";

export default function App({ setPageTheme }) {
  // const [data, setData] = useState([]);
  // const [preview, togglePreview] = useState(false);

  const location = useLocation().state;

  console.log("locationlocation", location);
  const [formData, setFormData] = useState(formIoData);

  const printResult = () => {
    Formio.createForm(document.getElementById("formio-result"), {
      components: formData.components,
    }).then((form) => {
      console.log(form.component.components);
      form.on("submit", (data) => console.log("submit", data));
    });
  };

  useLayoutEffect(() => {
    setPageTheme(false);
  }, []);

  return (
    <Box className="App">
      <BuilderHeader formName={location?.title ?? "Autonomous"} />
      {/* <Typography variant="h3">Form builder</Typography> */}
      <Box sx={{
        p:2
      }}>
        <FormBuilderIo
          form={formIoData}
          onChange={(schema) => {
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
