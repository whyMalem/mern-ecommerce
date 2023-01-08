import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Meta from "../Meta";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  gap: 20px;
  flex: 4;
`;

const BlogTitle = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
`;

const SingleBlog = () => {
  return (
    <>
      <Meta title="Single Blog" />
      <Breadcrumbs title="Single Blog" />

      <Wrapper>
        <Link
          to="/blogs"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <HiOutlineArrowNarrowLeft />
          Go back to blogs
        </Link>
        <BlogTitle variant="h2">Blog Title</BlogTitle>
        <img src="images/blog-1.jpg" alt="thumbnail" />
        <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          quasi accusantium inventore modi consequatur beatae repellat non
          eaque, ipsa aspernatur dicta vitae omnis eius suscipit explicabo, iure
          voluptatem. Officiis molestias enim possimus?
        </Typography>
      </Wrapper>
    </>
  );
};

export default SingleBlog;
