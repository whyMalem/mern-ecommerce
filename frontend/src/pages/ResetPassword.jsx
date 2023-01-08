import { Box, styled, TextField, Typography } from "@mui/material";
import React from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Meta from "../Meta";

const Container = styled(Box)`
  padding: 32px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60vh;
`;

const CardWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 35%;
  gap: 16px;
  background-color: #fff;
  padding: 16px;
  border-radius: 16px;
  box-shadow: 2px 4px 16px -2px rgba(0, 0, 0, 0.1);
`;

const Title = styled(Typography)`
  word-break: break-word;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  color: var(--color-1c1c1b);
`;

const ButtonWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const ResetBtn = styled("button")({
  padding: "8px 12px",
  fontsize: "16px",
  cursor: "pointer",
  borderRadius: "12px",
  border: "1px solid var(--color-232f3e)",
  backgroundColor: "var(--color-232f3e)",
  color: "#fff",
  fontWeight: 600,
  letterSpacing: "1px",
  "&:hover": {
    boxShadow: "2px 4px 16px -2px rgba(0, 0, 0, 0.2)",
  },
});

const ResetPassword = () => {
  return (
    <>
      <Meta title="Reset Password" />
      <Breadcrumbs title="Reset Password" />
      <Container>
        <CardWrapper>
          <Title variant="h5">Reset Your Password</Title>

          <TextField size="small" type="password" label="Password" fullWidth />
          <TextField
            size="small"
            type="password"
            label="Confirm Password"
            fullWidth
          />
          <ButtonWrapper>
            <ResetBtn type="submit">Reset</ResetBtn>
          </ButtonWrapper>
        </CardWrapper>
      </Container>
    </>
  );
};

export default ResetPassword;
