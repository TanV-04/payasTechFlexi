import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
  SidebarMenu,
  Separator,
  Button,
  ButtonGroup,
} from "./SidebarElements";
import "../../App.css";

const Sidebar = ({ isOpen, toggle }) => {
  const auth = localStorage.getItem("user");
  const handleSignOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWrapper className="dmSans">
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="/courses" onClick={toggle}>
            Courses
          </SidebarLink>
          <SidebarLink to="/elearning" onClick={toggle}>
            E-Learning
          </SidebarLink>
          <SidebarLink to="/gallery" onClick={toggle}>
            Gallery
          </SidebarLink>
          <SidebarLink to="/videos" onClick={toggle}>
            Videos
          </SidebarLink>
          <SidebarLink to="/contactus" onClick={toggle}>
            Contact Us
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          {auth ? (
            <>
              <SidebarRoute
                onClick={handleSignOut}
                to="/"
                activeClassName="active"
              >
                Log Out
              </SidebarRoute>
            </>
          ) : (
            <SidebarRoute
              onClick={toggle}
              to="/signin"
              activeClassName="active"
            >
              Sign In
            </SidebarRoute>
          )}
        </SideBtnWrap>
        <SideBtnWrap>
          <SidebarRoute onClick={toggle} to="/enquire">
            Enquire
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
