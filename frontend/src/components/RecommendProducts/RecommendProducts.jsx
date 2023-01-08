import { Grid, styled } from "@mui/material";
import React from "react";
import RecommendCard from "./RecommendCard";

const Container = styled(Grid)`
  padding: 32px 24px;
`;

const RecommendProducts = () => {
  return (
    <Container container spacing={2}>
      <Grid item md={3} sm={6} xs={12}>
        <RecommendCard black="black" />
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <RecommendCard />
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <RecommendCard />
      </Grid>
      <Grid item md={3} sm={6} xs={12}>
        <RecommendCard />
      </Grid>
    </Container>
  );
};

export default RecommendProducts;
