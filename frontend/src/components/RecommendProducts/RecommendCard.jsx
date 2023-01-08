import { Box, styled, Typography } from "@mui/material";
import React from "react";

const Container = styled(Box)`
  background: #fff;
  box-shadow: 2px 4px 16px -2px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 395px;
  overflow: hidden;
`;

const Heading = styled(Typography)`
  font-size: 18px;
  font-weight: 500;
`;

const Title = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
`;

const Image = styled("img")({
  width: "75%",
  objectFit: "cover",
  alignSelf: "center",
});

const RecommendCard = ({ black }) => {
  return (
    <>
      {black ? (
        <Container style={{ backgroundColor: "black" }}>
          <Heading variant="h5" style={{ color: "white" }}>
            Big Products
          </Heading>

          <Title style={{ color: "white" }} variant="h6">
            Smart Screen Series 5
          </Title>

          <Typography style={{ color: "white" }}>
            From $999.00 or $41.62/mo.
          </Typography>

          <Image src="images/famous-1.webp" alt="recommend-products" />
        </Container>
      ) : (
        <Container>
          <Heading variant="h5">Big Products</Heading>

          <Title variant="h6">Smart Screen Series 5</Title>

          <Typography>From $999.00 or $41.62/mo.</Typography>

          <Image src="images/tv.jpg" alt="recommend-products" />
        </Container>
      )}
    </>
  );
};

export default RecommendCard;
