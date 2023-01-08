import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 16px;
  background-color: #fff;
`;

const Breadcrumbs = ({ title }) => {
  return (
    <Container>
      <Link style={{ color: "var(--color-131921)" }}>Home</Link> &nbsp; / &nbsp;
      <Typography>{title}</Typography>
    </Container>
  );
};

export default Breadcrumbs;
