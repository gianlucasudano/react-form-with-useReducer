import React from "react";
import Box from "@material-ui/core/Box";
import { StyledError, StyledLabel, StyledInput } from "./Input.styled";
const Input = ({ callback, label, itemId, type, ...rest }) => {
  return (
    <Box>
      <StyledLabel htmlFor={itemId}>{label}</StyledLabel>
      <StyledInput onChange={(e) => callback(e)} id={itemId} type={type} />
      <StyledError label="error" {...rest} />
    </Box>
  );
};

export default Input;
