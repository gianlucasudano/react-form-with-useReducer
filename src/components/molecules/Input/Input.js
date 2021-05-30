import React, { useEffect } from "react";
import Box from "@material-ui/core/Box";

import { StyledError, StyledLabel, StyledInput } from "./Input.styled";
const Input = ({ callback, label, inputRef, itemId, type, ...rest }) => {
  const { validationRules } = rest;

  useEffect(() => {
    console.log(inputRef?.current);
  }, [inputRef]);
  return (
    <Box>
      <StyledLabel htmlFor={itemId}>{label}</StyledLabel>
      <StyledInput onChange={(e) => callback(e)} id={itemId} type={type} />
      {validationRules?.label && (
        <StyledError label={validationRules?.label} {...rest} />
      )}
    </Box>
  );
};

export default Input;
