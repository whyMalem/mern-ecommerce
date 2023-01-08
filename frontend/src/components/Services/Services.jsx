import { Box, styled, Typography } from "@mui/material";
import React from "react";

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  padding: 32px 24px;
`;

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: auto;
`;

const Title = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
`;

const ShortDesp = styled(Typography)`
  font-size: 13px;
`;

const Services = () => {
  return (
    <Container>
      <Wrapper>
        <img width="13%" src="images/service.png" alt="services" />

        <Box>
          <Title variant="h6">Free Shipping</Title>
          <ShortDesp>From all orders over $5</ShortDesp>
        </Box>
      </Wrapper>

      <Wrapper>
        <img width="13%" src="images/service-02.png" alt="services" />

        <Box>
          <Title variant="h6">Daily Surprise Offer</Title>
          <ShortDesp>Save upto 25% off</ShortDesp>
        </Box>
      </Wrapper>

      <Wrapper>
        <img width="13%" src="images/service-03.png" alt="services" />

        <Box>
          <Title variant="h6">Support 24/7</Title>
          <ShortDesp>Shop with an expert</ShortDesp>
        </Box>
      </Wrapper>

      <Wrapper>
        <img width="13%" src="images/service-04.png" alt="services" />

        <Box>
          <Title variant="h6">Affordable Prices</Title>
          <ShortDesp>Get Factory Default Price</ShortDesp>
        </Box>
      </Wrapper>

      <Wrapper>
        <img src="images/service-05.png" alt="services" width="13%" />

        <Box>
          <Title variant="h6">Secure Payments</Title>
          <ShortDesp>100% Protected Payments</ShortDesp>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Services;
