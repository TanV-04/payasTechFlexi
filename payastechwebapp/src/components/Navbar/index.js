import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../images/logo.jpg";

import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  Navmenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  Separator,
  Button,
  ButtonGroup,
} from "./NavbarElements";
import Sidebar from "../Sidebar";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">
            {/* <h1>Hello!</h1> */}

            <img alt="logo" className="w-16 h-auto" src={logo} />
          </NavLogo>

          <MobileIcon onClick={toggleNav}>
            {/* {isNavOpen ? <FaBars /> : <FaBars />} */}
            <FaBars />
          </MobileIcon>

          <Navmenu>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
          </Navmenu>

          <Navmenu>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
          </Navmenu>

          <Navmenu>
            <NavItem>
              <NavLinks to="/courses">Courses</NavLinks>
            </NavItem>
          </Navmenu>

          <Navmenu>
            <NavItem>
              <NavLinks to="/elearning">E-Learning</NavLinks>
            </NavItem>
          </Navmenu>

          <Navmenu>
            <NavItem>
              <NavLinks to="/gallery">Gallery</NavLinks>
            </NavItem>
          </Navmenu>

          <Navmenu>
            <NavItem>
              <NavLinks to="/videos">Videos</NavLinks>
            </NavItem>
          </Navmenu>

          <Navmenu>
            <NavItem>
              <NavLinks to="/contactus">Contact Us</NavLinks>
            </NavItem>
          </Navmenu>

          <ButtonGroup>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
            <Separator />
            <NavBtn>
              <NavBtnLink to="/enquire">Enquire</NavBtnLink>
            </NavBtn>
          </ButtonGroup>
        </NavBarContainer>
      </Nav>

      <Sidebar isOpen={isNavOpen} toggle={toggleNav} />
    </>
  );
};

export default Navbar;
