import React, { useState } from "react";
import "../components/Navbar.css"
import Logo_Text from "../assets/Logo_Text.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom"
// import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
// import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo-container">
          <Link to="/" className="nav-logo">
            <img src={Logo_Text} />
          </Link>
        </div>
        <div className="navbar-links-container">
          <Link to="/Projects" className="nav-link">
            Our Projects
          </Link>
          <Link to="/Events" className="nav-link">
            Our Events
          </Link>
          <Link to="/Contact" >
            <button className="primary-button" id= "contact-mobile" >Contact Us</button>
          </Link>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List className="navbar-menu-container">
              <Link to="/" className="nav-link-mobile">
                Home
              </Link>
              <Link to="/Projects" className="nav-link-mobile">
                Our Projects
              </Link>
              <Link to="/Events" className="nav-link-mobile">
                Our Events
              </Link>
              <Link to="/Contacts" className="nav-link-mobile">
                Contact Us
              </Link>
            </List>
            <Divider />
          </Box>
        </Drawer>
      </div>
    </nav >
  );
};

export default Navbar;