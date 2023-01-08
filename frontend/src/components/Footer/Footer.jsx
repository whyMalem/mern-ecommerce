import { Box, Divider, InputBase, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Container = styled(Box)`
  background: var(--color-232f3e);
  color: #fff;
  padding: 0 24px;
  // position: fixed;
  // left: 0;
  // bottom: 0;
  // width: 100%;
`;

const SearchBox = styled(Box)`
  background-color: #fff;
  margin-left: auto;
  display: flex;
  align-items: center;
  width: 40%;
  border-radius: 4px;
`;

const Component = styled(Box)`
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
`;

const FooterLinksHead = styled("h4")({
  fontsize: "20px",
  fontWeight: 600,
  marginBottom: "16px",
});

const Links = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SocialIcons = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 8px 0;
`;

const Footer = () => {
  return (
    <Container>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          padding: "16px 0",
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <img src="images/newsletter.png" alt="newsletter" />
          <Typography
            variant="h2"
            style={{
              fontSize: "24px",
              textTransform: "capitalize",
              fontWeight: 600,
            }}
          >
            Sign up for Newsletter
          </Typography>
        </Box>

        <SearchBox>
          <InputBase
            placeholder="Your Email Address"
            sx={{ flex: 1, p: "0px 10px" }}
          />
          <Box
            sx={{
              p: "2px 10px",
              backgroundColor: "var(--color-232f3e)",
              cursor: "pointer",
              borderRadius: "4px",
              height: "max-content",
              margin: "0 8px",
            }}
          >
            <Typography>Subscribe</Typography>
          </Box>
        </SearchBox>
      </Box>

      <Divider sx={{ my: "8px" }} />

      <Component>
        <Box style={{ flex: 1 }}>
          <FooterLinksHead>Contact Us</FooterLinksHead>

          <Links>
            <address>
              Hno : 277 Near Vill chopal, <br /> Sonipat, Haryana <br />
              PinCode: 131103
            </address>

            <a href="tel:+91 8264954234">+91 8264954234</a>

            <a href="whyMalem10@gmail.com">whyMalem10@gmail.com</a>
          </Links>

          <SocialIcons>
            <Link>
              <BsLinkedin fontSize={24} />
            </Link>

            <Link>
              <BsInstagram fontSize={24} />
            </Link>

            <Link>
              <BsGithub fontSize={24} />
            </Link>

            <Link>
              <BsYoutube fontSize={24} />
            </Link>
          </SocialIcons>
        </Box>

        <Box style={{ flex: 1 }}>
          <FooterLinksHead>Information</FooterLinksHead>
          <Links>
            <Link>Privacy Policy</Link>
            <Link>Refund Policy</Link>
            <Link>Shipping Policy</Link>
            <Link>Terms & Conditions</Link>
            <Link to="/blogs">Blogs</Link>
          </Links>
        </Box>

        <Box style={{ flex: 1 }}>
          <FooterLinksHead>Account</FooterLinksHead>
          <Links>
            <Link>About Us</Link>
            <Link>Faq</Link>
            <Link to="/contact">Contact</Link>
          </Links>
        </Box>

        <Box style={{ flex: 1 }}>
          <FooterLinksHead>Quick Links</FooterLinksHead>
          <Links>
            <Link>Laptops</Link>
            <Link>Headphones</Link>
            <Link>Tablets</Link>
            <Link>Watch</Link>
          </Links>
        </Box>
      </Component>

      <Typography style={{ textAlign: "center", padding: "30px" }}>
        {" "}
        &copy; {new Date().getFullYear()}; Powered by Stored Corner
      </Typography>
    </Container>
  );
};

export default Footer;
