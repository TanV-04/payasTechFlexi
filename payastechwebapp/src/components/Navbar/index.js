import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../images/logo.jpg";
import { animateScroll as scroll } from "react-scroll";

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

const Navbar = ({ toggle }) => {
  const auth = localStorage.getItem("user"); // get auth status

  const [isNavOpen, setIsNavOpen] = useState(false);

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  });

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleSignOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavBarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            {/* <h1>Hello!</h1> */}

            <img alt="logo" className="w-16 h-auto" src={logo} />
          </NavLogo>

          <MobileIcon onClick={toggleNav}>
            {/* {isNavOpen ? <FaBars /> : <FaBars />} */}
            <FaBars />
          </MobileIcon>

          <Navmenu>
            <NavItem>
              <NavLinks to="/" exact activeClassname="active">
                Home
              </NavLinks>
            </NavItem>
          </Navmenu>

          <Navmenu>
            <NavItem>
              <NavLinks to="/about" activeClassName="active">
                About
              </NavLinks>
            </NavItem>
          </Navmenu>

          <Navmenu>
            <NavItem>
              <NavLinks to="/courses" activeClassName="active">
                Courses
              </NavLinks>
            </NavItem>
          </Navmenu>

          <Navmenu>
            <NavItem>
              <NavLinks to="/elearning" activeClassName="active">
                E-Learning
              </NavLinks>
            </NavItem>
          </Navmenu>

          <Navmenu>
            <NavItem>
              <NavLinks to="/gallery" activeClassName="active">
                Gallery
              </NavLinks>
            </NavItem>
          </Navmenu>

          <Navmenu>
            <NavItem>
              <NavLinks to="/videos" activeClassName="active">
                Videos
              </NavLinks>
            </NavItem>
          </Navmenu>

          <Navmenu>
            <NavItem>
              <NavLinks to="/contactus" activeClassName="active">
                Contact Us
              </NavLinks>
            </NavItem>
          </Navmenu>

          <ButtonGroup>
            <NavBtn>
              {auth ? (
                <>
                  <NavBtnLink
                    to="/"
                    onClick={handleSignOut}
                    activeClassName="active"
                  >
                    Log Out
                  </NavBtnLink>
                </>
              ) : (
                <NavBtnLink to="/signin" activeClassName="active">
                  Sign In
                </NavBtnLink>
              )}
              <Separator />
              <NavBtnLink to="/enquire" activeClassName="active">
                Enquire
              </NavBtnLink>
            </NavBtn>
          </ButtonGroup>
        </NavBarContainer>
      </Nav>

      <Sidebar isOpen={isNavOpen} toggle={toggleNav} />
    </>
  );
};

export default Navbar;
