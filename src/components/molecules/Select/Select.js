import React, { useCallback } from "react";

import Box from "@material-ui/core/Box";
import { StyledLabel, StyledSelect } from "./Select.styled";
const Select = ({ callback, label, itemId, options, ...rest }) => {
  return (
    <Box>
      <StyledLabel htmlFor={itemId}>{label}</StyledLabel>
      <StyledSelect
        onSelect={useCallback((e) => callback(e), [callback])}
        id={itemId}
      >
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </StyledSelect>
    </Box>
  );
};

export default Select;
