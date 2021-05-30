import styled from "@emotion/styled";
import Label from "../../atoms/Label/Label";
import isPropValid from "@emotion/is-prop-valid";

export const StyledError = styled(Label, {
  shouldForwardProp: (prop) => isPropValid(prop) && prop !== "hasError"
})((props) => {
  const { hasError, theme } = props;
  const { palette, spacing } = theme;
  const color = hasError ? palette?.error?.main : palette?.info?.main;
  return `
      padding: 0 ${spacing()}px;
      margin-top: ${spacing()}px;
      color: ${color};
      border: 1px solid ${color};
    `;
});

export const StyledLabel = styled("label")`
  margin-top: ${(props) => props.theme.spacing()}px;
  display: block;
`;

export const StyledInput = styled("input")`
  width: 100%;
`;
