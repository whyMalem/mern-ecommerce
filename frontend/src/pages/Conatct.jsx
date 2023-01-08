import {
  Box,
  List,
  ListItem,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Meta from "../Meta";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";

const Container = styled(Box)`
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 10px;
`;

const Component = styled(Box)`
  display: flex;
  gap: 24px;

  width: 100%;
  padding: 16px;
`;

const Section = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
`;

const ContactForm = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
`;

const Connect = styled(Box)`
  flex: 1;
`;

const ListItemStyled = styled(ListItem)`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Conatct = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <Breadcrumbs title="Contact Us" />
      <Container>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28964.077264331318!2d92.7523993936088!3d24.846437029859366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374e3577a67dd767%3A0x82accd3831643b14!2sRamnagar%2C%20Silchar%2C%20Assam!5e0!3m2!1sen!2sin!4v1672838554853!5m2!1sen!2sin"
          width="100%"
          height="450"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <Component>
          <Section>
            <Typography variant="h4" sx={{ marginBottom: "16px" }}>
              Contact
            </Typography>
            <ContactForm>
              <TextField fullWidth placeholder="Name" type="text" />
              <TextField fullWidth placeholder="Email" type="email" />
              <TextField fullWidth placeholder="Phone Number" type="number" />
              <TextField
                fullWidth
                placeholder="Comment"
                type="text"
                multiline
                rows={4}
              />
            </ContactForm>
          </Section>

          <Connect>
            <Typography variant="h4" sx={{ marginBottom: "16px" }}>
              Get in Touch With Us
            </Typography>
            <List>
              <ListItemStyled>
                <AiOutlineHome />
                <address>
                  Hno:277 , Near village chopal , Mandaura, Sonipat, Haryana
                </address>
              </ListItemStyled>
              <ListItemStyled>
                <BiPhoneCall />
                <a href="tel:+91 8264954234">+91 8264954234</a>
              </ListItemStyled>
              <ListItemStyled>
                <AiOutlineMail />
                <a href="mailto:navdeepdahiya753@gmail.com">
                  navdeepdahiya753@gmail.com
                </a>
              </ListItemStyled>
              <ListItemStyled>
                <BiInfoCircle />
                <p>Monday – Friday 10 AM – 8 PM</p>
              </ListItemStyled>
            </List>
          </Connect>
        </Component>
      </Container>
    </>
  );
};

export default Conatct;
