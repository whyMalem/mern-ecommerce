import {
  Box,
  List,
  ListItem,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Meta from "../Meta";
import ReactStars from "react-rating-stars-component";
import Colors from "../components/Common/Colors";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { ImLoop2 } from "react-icons/im";

const Container = styled(Box)`
  padding: 32px 24px;
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
`;

const Title = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  color: var(--color-131921);
`;

const Reviews = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-131921);
`;

const Text = styled(Typography)`
  font-size: 14px;
`;

const Flex = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Component = styled(Box)`
  display: flex;
  gap: 20px;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
`;

const ProductImage = styled(Box)`
  flex: 1;
`;

const OtherProductImage = styled(Box)`
  display: flex;
  gap: 16px;
`;

const ImageWrapper = styled(Box)`
  width: 48%;

  & > img {
    width: 100%;
    object-fit: cover;
  }
`;

const ProductDetails = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ReviewBtn = styled("button")({
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
  marginLeft: "auto",
  "&:hover": {
    boxShadow: "2px 4px 16px -2px rgba(0, 0, 0, 0.2)",
  },
});

const BlogTitle = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
`;

const Price = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-131921);
`;

const ListItemStyled = styled(ListItem)`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0;
  margin-bottom: 12px;
`;

const SizeIcon = styled("span")({
  padding: "4px 8px",
  border: "1px solid rgba(0,0,0,.2)",
});

const ButtonWrapper = styled(Box)`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const AddToCartBtn = styled("button")({
  padding: "8px 12px",
  fontsize: "16px",
  cursor: "pointer",
  borderRadius: "12px",
  border: "1px solid var(--color-232f3e)",
  backgroundColor: "var(--color-232f3e)",
  color: "#fff",
  fontWeight: 600,
  letterSpacing: "1px",
  "&:hover": {
    boxShadow: "2px 4px 16px -2px rgba(0, 0, 0, 0.2)",
  },
});

const BuyNowBtn = styled("button")({
  padding: "8px 12px",
  fontsize: "16px",
  cursor: "pointer",
  borderRadius: "12px",
  backgroundColor: "var(--color-febd69)",
  border: "1px solid var(--color-febd69)",
  fontWeight: 600,
  letterSpacing: "1px",
  "&:hover": {
    boxShadow: "2px 4px 16px -2px rgba(0, 0, 0, 0.2)",
  },
});

const SingleProduct = () => {
  const [reviewForm, setReviewForm] = useState(false);
  const imageUrl =
    "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg";

  return (
    <>
      <Meta title="Single Product" />
      <Breadcrumbs title="Single Product" />
      <Container>
        <Component>
          <ProductImage className="productImage">
            <img src={imageUrl} alt="product" />

            <OtherProductImage>
              <ImageWrapper>
                <img src={imageUrl} alt="product" />
              </ImageWrapper>

              <ImageWrapper>
                <img src={imageUrl} alt="product" />
              </ImageWrapper>

              <ImageWrapper>
                <img src={imageUrl} alt="product" />
              </ImageWrapper>

              <ImageWrapper>
                <img src={imageUrl} alt="product" />
              </ImageWrapper>
            </OtherProductImage>
          </ProductImage>

          <ProductDetails>
            <BlogTitle variant="h2">Product Title</BlogTitle>

            <Price>$100.00</Price>

            <Flex>
              <ReactStars
                count={5}
                size={16}
                activeColor="#ffd700"
                value="3"
                edit={false}
              />
              <Text> (2 Reviews)</Text>
            </Flex>

            <Text
              sx={{ color: "blue", cursor: "pointer" }}
              onClick={() => setReviewForm((prev) => !prev)}
              className="forget"
            >
              Write a Review
            </Text>

            <List>
              <ListItemStyled>
                <h5>Brand:</h5>
                <p>Havels</p>
              </ListItemStyled>

              <ListItemStyled>
                <h5>Type:</h5>
                <p>Watch</p>
              </ListItemStyled>

              <ListItemStyled>
                <h5>Category:</h5>
                <p>Watch</p>
              </ListItemStyled>

              <ListItemStyled>
                <h5>Tag:</h5>
                <p>Watch</p>
              </ListItemStyled>

              <ListItemStyled>
                <h5>Colors:</h5>
                <Colors />
              </ListItemStyled>

              <ListItemStyled>
                <h5>Size:</h5>
                <Flex>
                  <SizeIcon>S</SizeIcon>
                  <SizeIcon>M</SizeIcon>
                  <SizeIcon>L</SizeIcon>
                  <SizeIcon>XL</SizeIcon>
                </Flex>
              </ListItemStyled>

              <ListItemStyled>
                <h5>Availablity:</h5>
                <p>In Stock</p>
              </ListItemStyled>

              <ListItemStyled>
                <h5>Quantity:</h5>
                <input
                  type="number"
                  max={5}
                  min={1}
                  value={1}
                  style={{ padding: "4px" }}
                />

                <ButtonWrapper sx={{ marginLeft: "30px" }}>
                  <AddToCartBtn>Add To Cart</AddToCartBtn>
                  <BuyNowBtn>
                    <Link to="/buy">Buy now</Link>
                  </BuyNowBtn>
                </ButtonWrapper>
              </ListItemStyled>

              <ListItemStyled sx={{ margin: "10px 0" }}>
                <Link to="/compare-products">
                  <Flex sx={{ gap: "5px" }}>
                    <ImLoop2 />
                    <Text>Add To Compare</Text>
                  </Flex>
                </Link>

                <Link to="/wishlist">
                  <Flex sx={{ gap: "5px" }}>
                    <AiOutlineHeart />
                    <Text>Add To Wishlist</Text>
                  </Flex>
                </Link>
              </ListItemStyled>
            </List>
          </ProductDetails>
        </Component>

        <Wrapper>
          <Title variant="h3">Description</Title>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dicta
            nam ex labore dignissimos optio eligendi quisquam magni sapiente
            suscipit nihil, error fugit quod expedita eaque officia architecto?
            Aliquam nemo illum nesciunt.
          </Text>
        </Wrapper>

        <Wrapper>
          <Title variant="h3">Reviews</Title>

          <Flex sx={{ marginTop: "10px" }}>
            <Box>
              <Reviews variant="h5">Customer Reviews</Reviews>
              <Flex>
                <ReactStars
                  count={5}
                  size={16}
                  activeColor="#ffd700"
                  value="3"
                  edit={false}
                />
                <Text>Based on 2 Reviews</Text>
              </Flex>
            </Box>
            <Text
              sx={{ marginLeft: "auto", color: "blue", cursor: "pointer" }}
              onClick={() => setReviewForm((prev) => !prev)}
              className="forget"
            >
              Write a Review
            </Text>
          </Flex>

          {reviewForm && (
            <>
              <Wrapper sx={{ margin: "10px 0", padding: "0px" }}>
                <Reviews variant="h5">Write Reviews</Reviews>
                <ReactStars
                  count={5}
                  size={16}
                  activeColor="#ffd700"
                  value="3"
                  edit={false}
                />
                <TextField
                  fullWidth
                  placeholder="Review the product"
                  type="text"
                  multiline
                  rows={4}
                />
                <ReviewBtn>Submit Review</ReviewBtn>
              </Wrapper>
            </>
          )}

          <Box sx={{ marginTop: "10px" }}>
            <Flex>
              <Reviews variant="h5">Anonymous</Reviews>
              <ReactStars
                count={5}
                size={16}
                activeColor="#ffd700"
                value="3"
                edit={false}
              />
            </Flex>

            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              dicta nam ex labore dignissimos optio eligendi quisquam magni
              sapiente suscipit nihil, error fugit quod expedita eaque officia
              architecto? Aliquam nemo illum nesciunt.
            </Text>
          </Box>
        </Wrapper>
      </Container>
    </>
  );
};

export default SingleProduct;
