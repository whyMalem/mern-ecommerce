import { Box, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Component = styled(Box)`
  flex: 1;
  position: relative;
`;

const Wrapper = styled(Box)`
  position: absolute;
  top: 15%;
  left: 4%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const MainBanner = () => {
  return (
    <Component>
      <img
        src="images/main-banner-1.jpg"
        alt="main banner"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "12px",
          objectFit: "cover",
        }}
      />

      <Wrapper>
        <h4 style={{ color: "var(--color-bf4800)" }}>SUPERCHARGED FOR PROS.</h4>
        <h5 style={{ fontSize: "32px" }}>iPad S13+ Pro.</h5>
        <p>From $999.00 or $41.62/mo.</p>
        <Link className="button">BUY NOW</Link>
      </Wrapper>
    </Component>
  );
};

export default MainBanner;
