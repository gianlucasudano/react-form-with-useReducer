import React, { useCallback } from "react";
import Box from "@material-ui/core/Box";

import { StyledError, StyledLabel, StyledInput } from "./Input.styled";
const Input = ({ callback, label, itemId, type, ...rest }) => {
  const { validationRules } = rest;
  return (
    <Box>
      <StyledLabel htmlFor={itemId}>{label}</StyledLabel>
      <StyledInput
        onChange={useCallback((e) => callback(e), [callback])}
        id={itemId}
        type={type}
      />
      {validationRules?.label && (
        <StyledError label={validationRules?.label} {...rest} />
      )}
    </Box>
  );
};

export default Input;
