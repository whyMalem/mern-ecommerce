import { Box, styled, useMediaQuery } from "@mui/material";
import React, { useEffect } from "react";
import AllProducts from "../components/AllProducts/AllProducts";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import FilterSection from "../components/FilterSection/FilterSection";
import Meta from "../Meta";
import { useTheme } from "@mui/material/styles";
import { useDataProvider } from "../context/DataProvider";

const Container = styled(Box)`
  padding: 32px 24px;
  display: flex;
  gap: 24px;
`;

const OurStore = () => {
  const { setGrid } = useDataProvider();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matches2 = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    matches && setGrid(6);
    matches2 && setGrid(12);
  }, [matches, matches2]);

  return (
    <>
      <Meta title="Our Store" />
      <Breadcrumbs title="Our Store" />

      <Container>
        <FilterSection />
        <AllProducts />
      </Container>
    </>
  );
};

export default OurStore;
