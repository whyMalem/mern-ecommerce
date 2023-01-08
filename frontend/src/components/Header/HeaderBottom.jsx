import { Box, Divider, Menu, MenuItem, styled } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";
import { Link } from "react-router-dom";

const HeaderBottomStyled = styled(Box)`
  background-color: var(--color-232f3e);
  color: #fff;
  padding: 10px 24px;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Links = styled(Box)`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const HeaderBottom = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderBottomStyled>
      <Box
        onClick={handleClick}
        style={{
          display: "flex",
          alignItem: "center",
          gap: "12px",
          cursor: "pointer",
        }}
      >
        <img src="images/menu.svg" alt="menu" />
        Shop Categories
        <KeyboardArrowDownIcon />
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          style: {
            width: "200px",
          },
        }}
      >
        <MenuItem onClick={handleClose} disableRipple>
          <Link to="">Action</Link>
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />

        <MenuItem onClick={handleClose} disableRipple>
          <Link to="">Another Action</Link>
        </MenuItem>

        <Divider sx={{ my: 0.5 }} />

        <MenuItem onClick={handleClose} disableRipple>
          <Link to="">Something Else</Link>
        </MenuItem>
      </Menu>

      <Links>
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/product">
          Our Store
        </Link>
        <Link className="link" to="/blogs">
          Blogs
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </Links>
    </HeaderBottomStyled>
  );
};

export default HeaderBottom;
