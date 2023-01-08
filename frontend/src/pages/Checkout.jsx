import { Box, Breadcrumbs, Divider, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Container = styled(Box)`
  padding: 32px 24px;
  display: flex;
  gap: 24px;
`;

const Wrapper = styled(Box)`
  display: flex;
  gap: 24px;
  flex-direction: column;
  flex: 1;
  padding: 16px;
`;

const Flex = styled(Box)`
  display: flex;
  align-items: center;
  gap: 17px;
`;

const FormGroup = styled(Box)`
  display: flex;
  gap: 20px;
  flex-direction: column;
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

const Title = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-131921);
`;

const Price = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-131921);
`;

const Text = styled(Typography)`
  font-size: 13px;
  font-weight: 400;
`;

const Description = styled(Box)`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

const Checkout = () => {
  const imageUrl =
    "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg";
  return (
    <>
      <Container>
        <Wrapper>
          <Typography variant="h3">Stored Corner</Typography>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link to="/">
              <Typography color="text.primary">Home</Typography>
            </Link>

            <Link to="/cart">
              <Typography color="text.primary">Cart</Typography>
            </Link>

            <Typography>Shipping</Typography>
            <Typography>Paymennt</Typography>
          </Breadcrumbs>

          <Typography variant="h5">Contact Information</Typography>

          <Typography>Demo Name (demo0232@gmail.com)</Typography>

          <Typography variant="h5">Shipping Address</Typography>

          <form action="">
            <FormGroup>
              <select
                name=""
                id=""
                className="w-100"
                style={{ padding: "8px" }}
              >
                <option value="" selected disabled>
                  Select Country
                </option>
              </select>

              <Flex>
                <input
                  type="text"
                  placeholder="First Name"
                  style={{ flex: "1", padding: "8px" }}
                />

                <input
                  type="text"
                  placeholder="Last Name"
                  style={{ flex: "1", padding: "8px" }}
                />
              </Flex>

              <input
                type="text"
                placeholder="Address"
                style={{ flex: "1", padding: "8px" }}
              />

              <input
                type="text"
                placeholder="Apartment, Sute, etc;"
                style={{ flex: "1", padding: "8px" }}
              />

              <Flex>
                <input
                  type="text"
                  placeholder="City"
                  style={{ flex: "1", padding: "8px" }}
                />

                <select
                  name=""
                  id=""
                  className="w-100"
                  style={{ padding: "8px", flex: "1" }}
                >
                  <option value="" selected disabled>
                    Select State
                  </option>
                </select>

                <input
                  type="text"
                  placeholder="Pincode"
                  style={{ flex: "1", padding: "8px" }}
                />
              </Flex>
            </FormGroup>
          </form>

          <Flex sx={{ justifyContent: "space-between" }}>
            <Link to="/cart">
              <Flex>
                <BiArrowBack />
                <Typography>Return to Cart</Typography>
              </Flex>
            </Link>

            <Link to="/product">
              <ContinueBtn>Continue Shopping</ContinueBtn>
            </Link>
          </Flex>
        </Wrapper>

        <Wrapper
          sx={{
            backgroundColor: "#fff",
            height: "max-content",
            borderRadius: "8px",
            boxShadow: "2px 4px 16px -2px rgba(0, 0, 0, .2)",
          }}
        >
          <Flex sx={{ alignItems: "flex-start" }}>
            <img
              src={imageUrl}
              alt="product"
              width="200px"
              style={{ objectFit: "cover" }}
            />
            <Description flex={1}>
              <Title variant="h3">product title</Title>
              <Text>S / #425fce</Text>
            </Description>
            <Price>$100</Price>
          </Flex>

          <Divider />

          <Description>
            <Flex sx={{ justifyContent: "space-between" }}>
              <Title>Subtotal</Title>
              <Text>$ 499</Text>
            </Flex>

            <Flex sx={{ justifyContent: "space-between" }}>
              <Title>Shipping</Title>
              <Text>$ 499</Text>
            </Flex>
          </Description>

          <Divider />

          <Flex sx={{ justifyContent: "space-between" }}>
            <Title>Total</Title>
            <Text>$ 499</Text>
          </Flex>
        </Wrapper>
      </Container>
    </>
  );
};

export default Checkout;
