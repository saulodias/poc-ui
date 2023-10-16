import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import { ClnButtonProps } from "./Button.types";

const StyledButton = styled(Button)<ClnButtonProps>(({ theme }) => ({
  border: 0,
  lineHeight: 1,
  fontSize: "15px",
  cursor: "pointer",
  fontWeight: 700,
  borderRadius: "3px",
  display: "inline-block",
}));

const ClnButton: React.FC<ClnButtonProps> = (...props) => {
  const { ...otherProps } = props;

  return <StyledButton {...otherProps}>My awesome button</StyledButton>;
};

export default ClnButton;
