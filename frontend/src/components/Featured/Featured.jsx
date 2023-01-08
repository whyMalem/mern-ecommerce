import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import FeaturedCard from "./FeaturedCard";

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

const Featured = () => {
  return (
    <Container>
      <Box>
        <Heading variant="h2">Featured Collections</Heading>
      </Box>

      <Wrapper container spacing={2}>
        <Grid item lg={2} md={3} xs={6}>
          <FeaturedCard />
        </Grid>
        <Grid item lg={2} md={3} xs={6}>
          <FeaturedCard />
        </Grid>
        <Grid item lg={2} md={3} xs={6}>
          <FeaturedCard />
        </Grid>
        <Grid item lg={2} md={3} xs={6}>
          <FeaturedCard />
        </Grid>
        <Grid item lg={2} md={3} xs={6}>
          <FeaturedCard />
        </Grid>
        <Grid item lg={2} md={3} xs={6}>
          <FeaturedCard />
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Featured;
