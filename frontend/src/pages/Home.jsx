import React from "react";
import { Grid, styled } from "@mui/material";
import MainBanner from "../components/Banner/MainBanner";
import SmallBanner from "../components/Banner/SmallBanner";
import Services from "../components/Services/Services";
import Categories from "../components/Categories/Categories";
import Brand from "../components/Brand/Brand";
import Blog from "../components/Blog/Blog";
import Featured from "../components/Featured/Featured";
import SpecialProduct from "../components/SpecialProduct/SpecialProduct";
import PopularProducts from "../components/PopularProducts/PopularProducts";
import RecommendProducts from "../components/RecommendProducts/RecommendProducts";

const Container = styled(Grid)`
  padding: 32px 24px;
  margin-top: 0px;
  background-color: #fff;
`;

const Home = () => {
  return (
    <>
      <Container container spacing={2}>
        <Grid item md={6} xs={12}>
          <MainBanner />
        </Grid>

        <Grid item md={6} xs={12}>
          <SmallBanner />
        </Grid>
      </Container>

      <Services />

      <Categories />

      <Featured />

      <RecommendProducts />

      <SpecialProduct />

      <PopularProducts />

      <Brand />

      <Blog />
    </>
  );
};

export default Home;
