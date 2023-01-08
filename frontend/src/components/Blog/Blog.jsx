import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import BlogCard from "./BlogCard";

const Container = styled(Box)`
  padding: 32px 24px;
`;

const Heading = styled(Typography)`
  font-size: 32px;
  font-weight: 600;
`;

const Wrapper = styled(Grid)`
  margin: 20px 0;
`;

const Blog = () => {
  return (
    <Container>
      <Box>
        <Heading variant="h2">Our Latest Blogs</Heading>
      </Box>

      <Wrapper container spacing={2}>
        <Grid item md={3} sm={6} xs={12}>
          <BlogCard />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <BlogCard />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <BlogCard />
        </Grid>
        <Grid item md={3} sm={6} xs={12}>
          <BlogCard />
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Blog;
