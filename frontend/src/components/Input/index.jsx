import { TextField } from "@mui/material";
import React from "react";

const Input = ({ name, value, placeholder, onChange, ...props }) => {
  return (
    <TextField
      {...props}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
