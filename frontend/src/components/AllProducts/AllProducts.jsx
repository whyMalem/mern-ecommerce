import { Box, Grid, styled } from "@mui/material";
import React from "react";
import { useDataProvider } from "../../context/DataProvider";
import FeaturedCard from "../Featured/FeaturedCard";
import SortFilter from "./SortFilter";

const Container = styled(Box)`
  flex: 4;
`;

const Div = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0;
`;

const AllProducts = () => {
  const { grid } = useDataProvider();

  return (
    <Container>
      <SortFilter />

      <Div container spacing={1}>
        <Grid item xs={grid}>
          <FeaturedCard />
        </Grid>

        <Grid item xs={grid}>
          <FeaturedCard />
        </Grid>

        <Grid item xs={grid}>
          <FeaturedCard />
        </Grid>

        <Grid item xs={grid}>
          <FeaturedCard />
        </Grid>
      </Div>
    </Container>
  );
};

export default AllProducts;
