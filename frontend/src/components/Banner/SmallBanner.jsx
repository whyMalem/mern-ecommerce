import { Box, Grid, styled } from "@mui/material";
import React from "react";

const Component = styled(Grid)`
  position: relative;
`;

const Wrapper = styled(Box)`
  position: absolute;
  top: 18%;
  left: 12%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SmallBanner = () => {
  return (
    <Grid container spacing={2}>
      <Component item md={6} xs={12}>
        <img
          src="images/catbanner-01.jpg"
          alt="main banner"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />

        <Wrapper>
          <h4 style={{ color: "var(--color-bf4800)", fontSize: "16px" }}>
            Best Sale
          </h4>
          <h5 style={{ fontSize: "20px" }}>iPad S13+ Pro.</h5>
          <p>From $999.00 or $41.62/mo.</p>
        </Wrapper>
      </Component>

      <Component item md={6} xs={12}>
        <img
          src="images/catbanner-02.jpg"
          alt="main banner"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />

        <Wrapper>
          <h4 style={{ color: "var(--color-bf4800)", fontSize: "16px" }}>
            NEW ARRIVAL
          </h4>
          <h5 style={{ fontSize: "20px" }}>IPad Air</h5>
          <p>From $999.00 or $41.62/mo.</p>
        </Wrapper>
      </Component>

      <Component item md={6} xs={12}>
        <img
          src="images/catbanner-03.jpg"
          alt="main banner"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />

        <Wrapper>
          <h4 style={{ color: "var(--color-bf4800)", fontSize: "16px" }}>
            NEW ARRIVAL
          </h4>
          <h5 style={{ fontSize: "20px" }}>But IPad Air</h5>
          <p>From $999.00 or $41.62/mo.</p>
        </Wrapper>
      </Component>

      <Component item md={6} xs={12}>
        <img
          src="images/catbanner-03.jpg"
          alt="main banner"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />

        <Wrapper>
          <h4 style={{ color: "var(--color-bf4800)", fontSize: "16px" }}>
            RECOMMEND
          </h4>
          <h5 style={{ fontSize: "20px" }}>iPad S13+ Pro.</h5>
          <p>From $999.00 or $41.62/mo.</p>
        </Wrapper>
      </Component>
    </Grid>
  );
};

export default SmallBanner;
