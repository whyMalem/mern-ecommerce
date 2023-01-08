import { Box, styled, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { useDataProvider } from "../../context/DataProvider";

const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  padding: 15px;
  box-shadow: 2px 4px 16px -2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Div = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SortFilter = () => {
  const { setGrid } = useDataProvider();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matches2 = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container>
      <Div>
        <Typography>Sort By</Typography>

        <select name="" defaultValue={"best-selling"} id="">
          <option value="manual">Featured</option>
          <option value="best-selling">Best selling</option>
          <option value="title-ascending">Alphabetically, A-Z</option>
          <option value="title-descending">Alphabetically, Z-A</option>
          <option value="price-ascending">Price, low to high</option>
          <option value="price-descending">Price, high to low</option>
          <option value="created-ascending">Date, old to new</option>
          <option value="created-descending">Date, new to old</option>
        </select>
      </Div>

      <Div>
        <Typography>21 products</Typography>

        {!matches && (
          <>
            <img
              src="images/gr4.svg"
              alt="grid"
              width="24px"
              height="24px"
              className="grid-images"
              onClick={() => setGrid(3)}
            />
            <img
              src="images/gr3.svg"
              alt="grid"
              width="24px"
              height="24px"
              className="grid-images"
              onClick={() => setGrid(4)}
            />
          </>
        )}

        {!matches2 && (
          <img
            src="images/gr2.svg"
            alt="grid"
            width="24px"
            height="24px"
            className="grid-images"
            onClick={() => setGrid(6)}
          />
        )}

        <img
          src="images/gr.svg"
          alt="grid"
          width="24px"
          height="24px"
          className="grid-images"
          onClick={() => setGrid(12)}
        />
      </Div>
    </Container>
  );
};

export default SortFilter;
