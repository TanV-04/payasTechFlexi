import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px'
margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 908 px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 908px) {
    flex-direction: column; 
    align-items: center;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 250px;
  color: #fff;

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 908px) {
    width: 100%;
    margin: 0;
    padding: 10px;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
color: #fff;
text-decoration: none;
margin-bottom: 0.5rem;
font-size: 14px;

&:hover {
color: #01bf71
transition: 0.3s ease-out
}
`;

export const FooterLinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const FooterLinkItem = styled.li`
  margin-bottom: 0.5rem;
`;

export const Separator = styled.div`
  height: 60px;
  width: 1px;
  background: #fff;
  margin: 0 20px;
  display: none;

  @media screen and (min-width: 908px) {
    display: block;
    align-self: center;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 908px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const SocialLogo = styled("Link")`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
