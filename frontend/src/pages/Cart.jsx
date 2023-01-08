import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Meta from "../Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Container = styled(Box)`
  padding: 32px 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

const Wrapper = styled(Box)`
  display: flex;
  align-items: center;
  padding: 16px;
`;

const Title = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  color: var(--color-131921);
`;

const Flex = styled(Box)`
  display: flex;
  gap: 17px;
`;

const Price = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-131921);
`;

const ContinueBtn = styled("button")({
  padding: "8px 12px",
  fontsize: "16px",
  cursor: "pointer",
  borderRadius: "12px",
  border: "1px solid var(--color-232f3e)",
  backgroundColor: "var(--color-232f3e)",
  color: "#fff",
  fontWeight: 600,
  letterSpacing: "1px",
  width: "max-content",
  "&:hover": {
    boxShadow: "2px 4px 16px -2px rgba(0, 0, 0, 0.2)",
  },
});

const Cart = () => {
  const imageUrl =
    "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg";

  return (
    <>
      <Meta title="Cart" />
      <Breadcrumbs title="Cart" />
      <Container>
        <Wrapper>
          <Title variant="h4" className="w-40">
            Product
          </Title>
          <Title variant="h4" className="w-10">
            Price
          </Title>
          <Title variant="h4" className="w-15">
            Quantity
          </Title>
          <Title variant="h4" className="w-15">
            Total
          </Title>
        </Wrapper>

        <Wrapper
          sx={{
            backgroundColor: "#fff",
            boxShadow: "2px 4px 16px -2px rgba(0, 0, 0, .2)",
            borderRadius: "8px",
          }}
        >
          <Flex className="w-40">
            <img
              src={imageUrl}
              alt="product"
              width="200px"
              style={{ objectFit: "cover" }}
            />

            <Box>
              <Typography variant="h5">headinh</Typography>
              <Typography>Size : M</Typography>
              <Typography>Color : #435f6</Typography>
            </Box>
          </Flex>

          <Flex className="w-10">
            <Price>$100</Price>
          </Flex>

          <Flex className="w-15">
            <input
              type="number"
              max={5}
              min={1}
              value={1}
              style={{ padding: "4px" }}
            />
          </Flex>

          <Flex className="w-15">
            <Price>$100</Price>
          </Flex>

          <AiFillDelete className="delete" />
        </Wrapper>

        <Wrapper
          sx={{
            backgroundColor: "#fff",
            boxShadow: "2px 4px 16px -2px rgba(0, 0, 0, .2)",
            borderRadius: "8px",
          }}
        >
          <Flex className="w-40">
            <img
              src={imageUrl}
              alt="product"
              width="200px"
              style={{ objectFit: "cover" }}
            />

            <Box>
              <Typography variant="h5">headinh</Typography>
              <Typography>Size : M</Typography>
              <Typography>Color : #435f6</Typography>
            </Box>
          </Flex>

          <Flex className="w-10">
            <Price>$100</Price>
          </Flex>

          <Flex className="w-15">
            <input
              type="number"
              max={5}
              min={1}
              value={1}
              style={{ padding: "4px" }}
            />
          </Flex>

          <Flex className="w-15">
            <Price>$100</Price>
          </Flex>

          <AiFillDelete className="delete" />
        </Wrapper>

        <Link to="/product">
          <ContinueBtn>Continue Shopping</ContinueBtn>
        </Link>
      </Container>
    </>
  );
};

export default Cart;
