import React, { useState } from "react";
import { FormBuilder as FormBuilderIo, Formio, FormEdit } from "react-formio";
import { formIoData } from "./FormioBuilder/consts";
import "./styles.css";
// import "react-form-builder2/dist/app.css";
import "formiojs/dist/formio.full.css";
import { useLocation } from "react-router-dom";

const url = `https://safe-springs-353/06.herokuapp.com/api/formdata?cid=`;

export default function FormBuilder() {
  const [formData, setFormData] = useState(formIoData);



  const printResult = () => {
    Formio.createForm(document.getElementById("formio-result"), {
      components: formData.components,
    }).then((form) => {
      console.log(form.component.components);
      form.on("submit", (data) => console.log("submit", data));
    });
    // }
  };

  return (
    <div className="App">
      <h2>Form builder playground</h2>
      <div>
        <button className="green" onClick={printResult}>
          display result
        </button>

        <FormBuilderIo
          form={formIoData}
          // onChange={schema => setFormData(schema)}
          onSubmit={(data) => {
            console.log(data);
          }}
          saveForm={(data) => setFormData(data)}
          saveText="Save Form"
          onSubmitDone={(data) => console.log(data)}
        />
        <div style={{ display: "none" }}>
          <div id="formio-result" />
        </div>
      </div>
    </div>
  );
}