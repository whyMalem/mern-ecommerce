import { Box, Divider, styled, TextField, Typography } from "@mui/material";
import React from "react";
import ReactStars from "react-rating-stars-component";
import Colors from "../Common/Colors";

const Container = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Card = styled(Box)`
  background-color: #fff;
  box-shadow: 2px 4px 16px -2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 15px;
`;

const Heading = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
`;

const Div = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Flex = styled(Box)`
  display: flex;
  gap: 8px;
`;

const ColorsWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

// const Item = styled(ListItem)`
//   width: 32px;
//   height: 32px;
//   border-radius: 50%;
//   background-color: #004b80;
// `;

const Tag = styled(Box)`
  width: max-content;
  border-radius: 8px;
  background-color: #d3d3d3;
  padding: 6px;
  font-size: 13px;
`;

const Title = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-131921);
`;

const Price = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-131921);
`;

const Image = styled("img")({
  width: "100%",
  objectFit: "cover",
});

const FilterSection = () => {
  return (
    <Container>
      <Card>
        <Heading variant="h3">Shop By Categories</Heading>
        <ul style={{ margin: "12px 0" }}>
          <li>Watch</li>
          <li>Tv</li>
          <li>Camera</li>
          <li>Laptop</li>
        </ul>
      </Card>

      <Card>
        <Heading variant="h3">Filter By</Heading>
        <Div>
          <SubTitle variant="h5">Availability</SubTitle>

          <Flex>
            <input type="checkbox" value="" id="inStock" />
            <label htmlFor="inStock">In Stock (1)</label>
          </Flex>

          <Flex>
            <input type="checkbox" value="" id="outStock" />
            <label htmlFor="outStock">Out Stock (0)</label>
          </Flex>

          <SubTitle variant="h5">Price</SubTitle>

          <Flex>
            <TextField label="From" size="small" variant="outlined" />
            <TextField label="To" size="small" variant="outlined" />
          </Flex>

          <SubTitle variant="h5">Colors</SubTitle>

          <ColorsWrapper>
            <Colors />
            <Colors />
            <Colors />
            <Colors />
            <Colors />
            <Colors />
            <Colors />
            <Colors />
            <Colors />
            <Colors />
          </ColorsWrapper>

          <SubTitle variant="h5">Size</SubTitle>

          <Div>
            <Flex>
              <input type="checkbox" value="" id="color-1" />
              <label htmlFor="color-1">S (2)</label>
            </Flex>

            <Flex>
              <input type="checkbox" value="" id="color-2" />
              <label htmlFor="color-2">M (1)</label>
            </Flex>
          </Div>
        </Div>
      </Card>

      <Card>
        <Heading variant="h3">Product Tags</Heading>
        <ColorsWrapper>
          <Tag>Headphone</Tag>

          <Tag>Laptop</Tag>

          <Tag>Mobile</Tag>

          <Tag>Wire</Tag>

          <Tag>Watch</Tag>
        </ColorsWrapper>
      </Card>

      <Card>
        <Heading variant="h3">Random Product</Heading>

        <Div>
          <Flex>
            <Box style={{ flex: 1 }}>
              <Image src="images/headphone.jpg" alt="product" />
            </Box>

            <Div style={{ flex: 2, gap: "8px" }}>
              <Title>
                Mens Watches bulk 10 pack multi colored for students
              </Title>
              <ReactStars
                count={5}
                size={16}
                activeColor="#ffd700"
                value="3"
                edit={false}
              />

              <Price>$100.00</Price>
            </Div>
          </Flex>

          <Divider />

          <Flex>
            <Box style={{ flex: 1 }}>
              <Image src="images/headphone.jpg" alt="product" />
            </Box>

            <Div style={{ flex: 2, gap: "8px" }}>
              <Title>
                Mens Watches bulk 10 pack multi colored for students
              </Title>
              <ReactStars
                count={5}
                size={16}
                activeColor="#ffd700"
                value="3"
                edit={false}
              />

              <Price>$100.00</Price>
            </Div>
          </Flex>
        </Div>
      </Card>
    </Container>
  );
};

export default FilterSection;
