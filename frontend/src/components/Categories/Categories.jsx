import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";

const Container = styled(Box)`
  padding: 32px 24px;
`;

const Wrapper = styled(Grid)`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 2px 4px 16px -2px rgba(0, 0, 0, 0.1);
`;

const Category = styled(Grid)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border: 1px solid var(--color-ededed);
`;

const Title = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
`;

const ShortDesp = styled(Typography)`
  font-size: 13px;
`;

const Categories = () => {
  return (
    <Container>
      <Wrapper container spacing={2} style={{ margin: 0 }}>
        <Category item md={3} sm={6} xs={12}>
          <Box>
            <Title variant="h6">Music & Gaming</Title>
            <ShortDesp>10 Items</ShortDesp>
          </Box>
          <img src="images/camera.jpg" alt="camera" />
        </Category>

        <Category item md={3} sm={6} xs={12}>
          <Box>
            <Title variant="h6">Cameras</Title>
            <ShortDesp>10 Items</ShortDesp>
          </Box>
          <img src="images/camera.jpg" alt="camera" />
        </Category>

        <Category item md={3} sm={6} xs={12}>
          <Box>
            <Title variant="h6">Smart Tv</Title>
            <ShortDesp>10 Items</ShortDesp>
          </Box>
          <img src="images/tv.jpg" alt="camera" />
        </Category>

        <Category item md={3} sm={6} xs={12}>
          <Box>
            <Title variant="h6">Smart Watches</Title>
            <ShortDesp>10 Items</ShortDesp>
          </Box>
          <img src="images/headphone.jpg" alt="camera" />
        </Category>

        <Category item md={3} sm={6} xs={12}>
          <Box>
            <Title variant="h6">Music & Gaming</Title>
            <ShortDesp>10 Items</ShortDesp>
          </Box>
          <img src="images/camera.jpg" alt="camera" />
        </Category>

        <Category item md={3} sm={6} xs={12}>
          <Box>
            <Title variant="h6">Cameras</Title>
            <ShortDesp>10 Items</ShortDesp>
          </Box>
          <img src="images/camera.jpg" alt="camera" />
        </Category>

        <Category item md={3} sm={6} xs={12}>
          <Box>
            <Title variant="h6">Smart Tv</Title>
            <ShortDesp>10 Items</ShortDesp>
          </Box>
          <img src="images/tv.jpg" alt="camera" />
        </Category>

        <Category item md={3} sm={6} xs={12}>
          <Box>
            <Title variant="h6">Smart Watches</Title>
            <ShortDesp>10 Items</ShortDesp>
          </Box>
          <img src="images/headphone.jpg" alt="camera" />
        </Category>
      </Wrapper>
    </Container>
  );
};

export default Categories;
