import { Box, styled } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";

const Container = styled(Box)`
  padding: 32px 24px;
`;

const Brand = () => {
  return (
    <Container>
      <Marquee
        style={{
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "2px 4px 16px -2px rgba(0, 0, 0, 0.1)",
        }}
        gradient={false}
      >
        <Box style={{ margin: "0 20px" }}>
          <img src="images/brand-01.png" alt="brand" />
        </Box>

        <Box style={{ margin: "0 20px" }}>
          <img src="images/brand-02.png" alt="brand" />
        </Box>

        <Box style={{ margin: "0 20px" }}>
          <img src="images/brand-03.png" alt="brand" />
        </Box>

        <Box style={{ margin: "0 20px" }}>
          <img src="images/brand-04.png" alt="brand" />
        </Box>

        <Box style={{ margin: "0 20px" }}>
          <img src="images/brand-05.png" alt="brand" />
        </Box>

        <Box style={{ margin: "0 20px" }}>
          <img src="images/brand-06.png" alt="brand" />
        </Box>

        <Box style={{ margin: "0 20px" }}>
          <img src="images/brand-07.png" alt="brand" />
        </Box>

        <Box style={{ margin: "0 20px" }}>
          <img src="images/brand-08.png" alt="brand" />
        </Box>
      </Marquee>
    </Container>
  );
};

export default Brand;
