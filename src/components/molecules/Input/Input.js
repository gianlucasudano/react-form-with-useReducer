import React, { useCallback, useRef } from "react";
import Box from "@material-ui/core/Box";
import checkForValidation from "./helpers";
import { StyledError, StyledLabel, StyledInput } from "./Input.styled";
const Input = ({
  callback,
  dispatchErrorCallback,
  label,
  itemId,
  type,
  ...rest
}) => {
  const { validationRules } = rest;
  const hasError = useRef();
  const handleOnBlur = useCallback(
    (event) => {
      const { id, value } = event.target;
      callback(event);
      hasError.current = validationRules?.type
        ? checkForValidation({ validationRules, value })
        : false;
      if (hasError.current || value.trim() === "") {
        dispatchErrorCallback({ id, value });
      }
    },
    [callback, dispatchErrorCallback, validationRules]
  );

  return (
    <Box>
      <StyledLabel htmlFor={itemId}>{label}</StyledLabel>
      <StyledInput onBlur={(e) => handleOnBlur(e)} id={itemId} type={type} />
      {validationRules?.label && (
        <StyledError
          hasError={hasError.current}
          label={validationRules?.label}
          {...rest}
        />
      )}
    </Box>
  );
};

export default Input;
