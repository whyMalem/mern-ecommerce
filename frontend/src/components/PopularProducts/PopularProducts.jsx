import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import FeaturedCard from "../Featured/FeaturedCard";

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

const PopularProducts = () => {
  return (
    <Container>
      <Box>
        <Heading variant="h2">Our Popular Products</Heading>
      </Box>

      <Wrapper container spacing={2}>
        <Grid item md={3} sm={6} xs={12}>
          <FeaturedCard />
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          <FeaturedCard />
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          <FeaturedCard />
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          <FeaturedCard />
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default PopularProducts;
