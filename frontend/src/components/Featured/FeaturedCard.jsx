import { Box, styled, Typography, useMediaQuery } from "@mui/material";
import ReactStars from "react-rating-stars-component";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useDataProvider } from "../../context/DataProvider";

const Container = styled(Box)`
  background-color: #fff;
  border-radius: 16px;
  padding: 15px;
  box-shadow: 2px 4px 16px -2px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

const Image = styled("img")({
  width: "100%",
  objectFit: "cover",
});

const Title = styled(Typography)`
  font-size: 18px;
  font-weight: 500;
  color: var(--color-131921);
`;

const Brand = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-bf4800);
`;

const Price = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-131921);
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ActionBar = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 20%;
  right: -25px;
  transition: 0.4s;
`;

const Description = styled(Typography)`
  font-size: 13px;
  font-color: var(--color-777777);
`;

const FeaturedCard = () => {
  const { grid } = useDataProvider();
  const [displayFlex, setDisplayFlex] = useState(false);

  const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matches2 = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    grid === 12 ? setDisplayFlex(true) : setDisplayFlex(false);
  }, [grid, matches2]);

  return (
    <Link to="/product/:id">
      <Container
        className="featuredCard"
        sx={
          matches2 ||
          (displayFlex ? { flexDirection: "row" } : { flexDirection: "column" })
        }
      >
        <Link style={{ position: "absolute", top: "15px", right: "16px" }}>
          <img
            src="images/wish.svg"
            alt="wishlist"
            // style={{ marginLeft: "auto", width: "16px", height: "16px" }}
          />
        </Link>
        <Box
          className="featured-product-img"
          sx={grid === 12 ? { width: "35%" } : { width: "100%" }}
        >
          <Image src="images/watch.jpg" alt="product" width="100%" />
          <Image src="images/laptop.jpg" alt="product" width="100%" />
        </Box>

        <Wrapper>
          <Brand variant="h4">Titan</Brand>
          <Title>Mens Watches bulk 10 pack multi colored for students</Title>
          <ReactStars
            count={5}
            size={16}
            activeColor="#ffd700"
            value="3"
            edit={false}
          />
          {grid === 12 && (
            <Description>
              {" "}
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt...
            </Description>
          )}
          <Price>$100.00</Price>
        </Wrapper>

        <ActionBar className="actionBar">
          <Link>
            <img src="images/prodcompare.svg" alt="compare" />
          </Link>

          <Link>
            <img src="images/view.svg" alt="view" />
          </Link>

          <Link>
            <img src="images/add-cart.svg" alt="addToCart" />
          </Link>
        </ActionBar>
      </Container>
    </Link>
  );
};

export default FeaturedCard;
