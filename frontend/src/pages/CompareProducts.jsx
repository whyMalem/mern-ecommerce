import { Box, List, ListItem, styled, Typography } from "@mui/material";
import React from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Colors from "../components/Common/Colors";
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
  position: relative;
  background-color: #fff;
  padding: 0 8px;
  box-shadow: 2px 4px 16px -2px rgba(0, 0, 0, 0.15);
`;

const Cross = styled("img")({
  position: "absolute",
  top: "10px",
  right: "10px",
  width: "16px",
  height: "16px",
  cursor: "pointer",
});

const Details = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const Title = styled(Typography)`
  //   word-break: break-word;
  font-size: 15px;
  font-weight: 600;
  color: var(--color-1c1c1b);
`;

const Price = styled(Typography)`
  font-size: 15px;
  font-weight: 500;
  color: var(--color-1c1c1b);
`;

const ListItemStyled = styled(ListItem)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 0;
  margin-top: 8px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const CompareProducts = () => {
  return (
    <>
      <Meta title="Compare Products" />
      <Breadcrumbs title="Compare Products" />
      <Container>
        <CardWrapper>
          <Cross src="images/cross.svg" alt="cross" />
          <img
            src="images/watch.jpg"
            alt="product"
            height="24%"
            style={{ objectFit: "cover" }}
          />

          <Details>
            <Title variant="h5">
              Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
            </Title>
            <Price variant="h6">$100</Price>

            <List>
              <ListItemStyled>
                <h5>Brand:</h5>
                <p>Havels</p>
              </ListItemStyled>

              <ListItemStyled>
                <h5>Type:</h5>
                <p>Watch</p>
              </ListItemStyled>

              <ListItemStyled>
                <h5>Availablity:</h5>
                <p>In Stock</p>
              </ListItemStyled>

              <ListItemStyled>
                <h5>Color:</h5>
                <Colors />
              </ListItemStyled>

              <ListItemStyled>
                <h5>Size:</h5>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <p>S</p>
                  <p>M</p>
                </Box>
              </ListItemStyled>
            </List>
          </Details>
        </CardWrapper>

        <CardWrapper>
          <Cross src="images/cross.svg" alt="cross" />
          <img
            src="images/watch.jpg"
            alt="product"
            height="24%"
            style={{ objectFit: "cover" }}
          />

          <Details>
            <Title variant="h5">
              Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
            </Title>
            <Price variant="h6">$100</Price>

            <List>
              <ListItemStyled>
                <h5>Brand:</h5>
                <p>Havels</p>
              </ListItemStyled>

              <ListItemStyled>
                <h5>Type:</h5>
                <p>Watch</p>
              </ListItemStyled>

              <ListItemStyled>
                <h5>Availablity:</h5>
                <p>In Stock</p>
              </ListItemStyled>

              <ListItemStyled>
                <h5>Color:</h5>
                <Colors />
              </ListItemStyled>

              <ListItemStyled>
                <h5>Size:</h5>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <p>S</p>
                  <p>M</p>
                </Box>
              </ListItemStyled>
            </List>
          </Details>
        </CardWrapper>
      </Container>
    </>
  );
};

export default CompareProducts;
