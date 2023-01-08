import {
  Badge,
  Box,
  LinearProgress,
  styled,
  Typography,
  linearProgressClasses,
} from "@mui/material";
import ReactStars from "react-rating-stars-component";
import React from "react";
import { Link } from "react-router-dom";

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: "16px",
  padding: "15px",
  boxShadow: "2px 4px 16px -2px rgba(0, 0, 0, 0.1)",
  display: "flex",
  gap: "10px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const Image = styled("img")({
  width: "100%",
  objectFit: "cover",
});

const Wrapper = styled(Box)`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

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

const Discount = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

const ProductCard = () => {
  return (
    <Container>
      <Box style={{ flex: 1 }}>
        <Image src="images/speaker.jpg" alt="speaker" />
      </Box>

      <Wrapper>
        <Brand variant="h4">Havels</Brand>
        <Title>Mens Watches bulk 10 pack multi colored for students</Title>
        <ReactStars
          count={5}
          size={16}
          activeColor="#ffd700"
          value="3"
          edit={false}
        />
        <Typography>
          $100.00 &nbsp;&nbsp; <strike>$200</strike>
        </Typography>

        <Discount>
          <Typography style={{ flex: 1 }}>
            <b>5</b> Days
          </Typography>

          <Box
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Badge badgeContent={4} color="warning" />:
            <Badge badgeContent={4} color="warning" />:
            <Badge badgeContent={4} color="warning" />
          </Box>
        </Discount>

        <Wrapper>
          <Typography>Products: 5</Typography>

          <BorderLinearProgress variant="determinate" value={30} />
        </Wrapper>

        <Link className="button" style={{ margin: "10px 0" }}>
          Add To Cart
        </Link>
      </Wrapper>
    </Container>
  );
};

export default ProductCard;
