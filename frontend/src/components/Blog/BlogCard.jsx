import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled(Box)`
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 2px 4px 16px -2px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
`;

const Image = styled("img")({
  width: "100%",
  objectFit: "cover",
  borderRadius: "inherit",
  borderBottomLeftRadius: "0px",
  borderBottomRightRadius: "0px",
});
const Title = styled(Typography)`
  font-size: 18px;
  font-weight: 600;
  color: var(--color-131921);
`;

const Desc = styled(Typography)`
  font-size: 14px;
`;

const BlogCard = () => {
  return (
    <Container>
      <Box
        style={{
          borderRadius: "inherit",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
        }}
      >
        <Image src="images/blog-1.jpg" alt="blog-thumbnail" />
      </Box>

      <Wrapper>
        <Typography style={{ color: "grey" }}>1 Dec, 2022</Typography>

        <Title variant="h5">A beautiful sunday morning renaissance</Title>

        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quaerat
          accusamus officia
        </Desc>

        <Link className="button" to="blog/:id">
          Read More
        </Link>
      </Wrapper>
    </Container>
  );
};

export default BlogCard;
