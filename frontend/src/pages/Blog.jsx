import { Box, Grid, styled, Typography } from "@mui/material";
import React from "react";
import BlogCard from "../components/Blog/BlogCard";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Meta from "../Meta";

const Container = styled(Box)`
  padding: 32px 24px;
  display: flex;
  gap: 24px;
`;

const Card = styled(Box)`
  background-color: #fff;
  box-shadow: 2px 4px 16px -2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 15px;
  flex: 1;
  height: max-content;
`;

const Heading = styled(Typography)`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const Wrapper = styled(Grid)`
  //   margin: 20px 0;
  flex: 4;
`;

const Blog = () => {
  return (
    <>
      <Meta title="Blogs" />
      <Breadcrumbs title="Blogs" />
      <Container>
        <Card>
          <Heading variant="h3">Find By Categories</Heading>
          <ul style={{ margin: "12px 0" }}>
            <li>Watch</li>
            <li>Tv</li>
            <li>Camera</li>
            <li>Laptop</li>
          </ul>
        </Card>

        <Wrapper container spacing={2}>
          <Grid item sm={6} xs={12}>
            <BlogCard />
          </Grid>
          <Grid item sm={6} xs={12}>
            <BlogCard />
          </Grid>
          <Grid item sm={6} xs={12}>
            <BlogCard />
          </Grid>
          <Grid item sm={6} xs={12}>
            <BlogCard />
          </Grid>
        </Wrapper>
      </Container>
    </>
  );
};

export default Blog;
