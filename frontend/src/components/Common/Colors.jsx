import { Box, styled } from "@mui/material";
import React from "react";

const Color = styled(Box)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #004b80;
`;

const Colors = () => {
  return <Color />;
};

export default Colors;
