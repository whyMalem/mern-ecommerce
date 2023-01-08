import React from "react";
import {
  AppBar,
  Badge,
  Box,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";

const Component = styled(Toolbar)`
  padding: 0 30px;
  background-color: #3b4149;
`;

const Brand = styled(Typography)`
  font-size: 30px;
  letter-spacing: 2px;
  font-weight: 600;
`;

const SearchBox = styled(Box)`
  background-color: #fff;
  margin-left: 50px;
  display: flex;
  align-items: center;
  width: 40%;
  border-radius: 4px;
`;

const LeftSide = styled(Box)`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 24px;
`;

const TabLink = styled(Typography)`
  font-size: 14px;
`;

const Navbar = () => {
  return (
    <AppBar position="static">
      <Component>
        <Brand variant="h1">Stored.</Brand>

        <SearchBox>
          <InputBase
            placeholder="Search Products Here"
            sx={{ flex: 1, p: "0px 10px" }}
          />
          <Box
            sx={{
              p: "10px 16px",
              backgroundColor: "#febd69",
              cursor: "pointer",
              borderRadius: "inherit",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
            }}
          >
            <BsSearch color="#131921" fontSize="16px" />
          </Box>
        </SearchBox>

        <LeftSide>
          <Link
            to="/compare-products"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img
              src="images/compare.svg"
              alt="compare"
              className="tabLink-img"
            />
            <TabLink>
              Compare <br /> Products{" "}
            </TabLink>
          </Link>

          <Link
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
            to="/wishlist"
          >
            <img
              src="images/wishlist.svg"
              alt="wishlist"
              className="tabLink-img"
            />
            <TabLink>
              Favourite <br /> Wishlist{" "}
            </TabLink>
          </Link>

          <Link
            to="/login"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <img src="images/user.svg" alt="user" className="tabLink-img" />
            <TabLink>
              Login <br /> My Product{" "}
            </TabLink>
          </Link>

          <Link
            to="/cart"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Badge badgeContent={4} color="warning">
              <img src="images/cart.svg" alt="cart" className="tabLink-img" />
            </Badge>
          </Link>
        </LeftSide>
      </Component>
    </AppBar>
  );
};

export default Navbar;
