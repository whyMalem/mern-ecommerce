import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Meta from "../Meta";

const Container = styled(Box)`
  padding: 32px 24px;
  display: flex;
  gap: 24px;
  margin: 10px;
  flex-wrap: wrap;
`;

const CardWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 20%;
  gap: 16px;
  position: relative;
  background-color: #fff;
  padding: 0 8px;
  box-shadow: 2px 4px 16px -2px rgba(0, 0, 0, 0.15);
`;

const Cross = styled("img")({
  position: "absolute",
  top: "10px",
  right: "16px",
  width: "16px",
  height: "16px",
  cursor: "pointer",
});

const Title = styled(Typography)`
  word-break: break-word;
  font-size: 15px;
  font-weight: 600;
  color: var(--color-1c1c1b);
`;

const Price = styled(Typography)`
  font-size: 15px;
  font-weight: 500;
  color: var(--color-1c1c1b);
`;

const WishList = () => {
  return (
    <>
      <Meta title="Wishlist" />
      <Breadcrumbs title="Wishlist" />
      <Container>
        <CardWrapper>
          <Cross src="images/cross.svg" alt="cross" />
          <img
            src="images/watch.jpg"
            alt="product"
            style={{ objectFit: "cover" }}
          />

          <Title variant="h5">
            Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
          </Title>
          <Price variant="h6">$100</Price>
        </CardWrapper>

        <CardWrapper>
          <Cross src="images/cross.svg" alt="cross" />
          <img
            src="images/camera.jpg"
            alt="product"
            style={{ objectFit: "cover" }}
          />

          <Title variant="h5">
            Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
          </Title>
          <Price variant="h6">$100</Price>
        </CardWrapper>

        <CardWrapper>
          <Cross src="images/cross.svg" alt="cross" />
          <img
            src="images/headphone.jpg"
            alt="product"
            style={{ objectFit: "cover" }}
          />

          <Title variant="h5">
            Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
          </Title>
          <Price variant="h6">$100</Price>
        </CardWrapper>
      </Container>
    </>
  );
};

export default WishList;
