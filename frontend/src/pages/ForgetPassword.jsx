import { Box, styled, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
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

const Msg = styled(Typography)`
  font-size: 13px;
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

const SubmitBtn = styled("button")({
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

const CancelBtn = styled("button")({
  padding: "8px 12px",
  fontsize: "16px",
  cursor: "pointer",
  borderRadius: "12px",
  backgroundColor: "var(--color-ededed)",
  border: "1px solid var(--color-ededed)",
  fontWeight: 600,
  letterSpacing: "1px",
  "&:hover": {
    boxShadow: "2px 4px 16px -2px rgba(0, 0, 0, 0.2)",
  },
});

const ForgetPassword = () => {
  return (
    <>
      <Meta title="Forgot Password" />
      <Breadcrumbs title="Forgot Password" />
      <Container>
        <CardWrapper>
          <Title variant="h5">Reset Your Password</Title>
          <Msg variant="h6">
            We will send you an email to reset your password
          </Msg>
          <TextField size="small" type="email" label="Email" fullWidth />
          <ButtonWrapper>
            <SubmitBtn type="submit">Submit</SubmitBtn>
            <CancelBtn>
              <Link to="/login">Cancel</Link>
            </CancelBtn>
          </ButtonWrapper>
        </CardWrapper>
      </Container>
    </>
  );
};

export default ForgetPassword;
