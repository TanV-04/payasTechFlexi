import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  color: #fff;

  @media screen and (max-width: 908px) {
    display: block;
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Navmenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  transition: all 0.3s ease;

  @media screen and (max-width: 908px) {
    display: none;
    flex-direction: column;
    width: 100%;
    background: #000;
    position: absolute;
    top: 80px;
    left: 0;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &.active {
      display: flex;
    }
  }
`;

export const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: 908px) {
    height: auto;
    padding: 1rem;
  }
`;

export const NavLinks = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 908px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  transition: all 0.2 ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #010606;
  font-size: 16px;
  margin: 0 10px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const Separator = styled.div`
  height: 40px;
  width: 1px;
  background: #fff;
  margin: 0 15px;
  display: none; /* Hidden by default */

  @media screen and (min-width: 908px) {
    display: block; 
  }
`;
