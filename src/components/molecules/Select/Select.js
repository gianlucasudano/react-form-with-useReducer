import PropTypes from "prop-types";
import React from "react";

import Box from "@material-ui/core/Box";
import { StyledLabel, StyledSelect } from "./Select.styled";
/**
 * Select component. Render a select with his label and options
 *
 * @param  {object} props - props
 * @param  {Function} props.callback
 * @param  {string} props.label
 * @param  {string} props.itemId
 * @param  {Array} props.options
 * @param  {object} props.rest - rest props
 *
 * @returns {React.Component} - <Select />
 */
const Select = ({ callback, label, itemId, options, ...rest }) => {
  return (
    <Box>
      <StyledLabel htmlFor={itemId}>{label}</StyledLabel>
      <StyledSelect onChange={(e) => callback(e)} id={itemId}>
        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </StyledSelect>
    </Box>
  );
};

Select.propTypes = {
  callback: PropTypes.func,
  itemId: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string
    })
  )
};

export default Select;
