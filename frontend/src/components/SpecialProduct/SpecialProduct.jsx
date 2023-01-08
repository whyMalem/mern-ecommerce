import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";

const Container = styled(Box)`
  padding: 32px 24px;
`;

const Heading = styled(Typography)`
  font-size: 32px;
  font-weight: 600;
`;

const Wrapper = styled(Grid)`
  margin: 20px 0;
`;

const SpecialProduct = () => {
  return (
    <Container>
      <Box>
        <Heading variant="h2">Our Special Products</Heading>
      </Box>

      <Wrapper container spacing={2}>
        <Grid item md={4} sm={6} xs={12}>
          <ProductCard />
        </Grid>

        <Grid item md={4} sm={6} xs={12}>
          <ProductCard />
        </Grid>

        <Grid item md={4} sm={6} xs={12}>
          <ProductCard />
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default SpecialProduct;
