import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLinkList,
  FooterLinkItem,
  Separator,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights

} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                <strong>Hadapsar Branch</strong>
              </FooterLinkTitle>
              <p>
                302, Pearl Square, 3rd Floor, above Dwarka Sweets, Satavnagar,
                Handewadi Road, Hadapsar, Pune, Maharashtra - 411028
              </p>
            </FooterLinkItems>
            <Separator />
            <FooterLinkItems>
              <FooterLinkTitle>
                <strong>FC Road Branch</strong>
              </FooterLinkTitle>
              <p>
                74, B-Wing, 3rd Floor, Shreenath Plaza, Dyaneshwar Paduka Chowk,
                Fergusson College Rd, Shivajinagar, Pune, Maharashtra - 411005
              </p>
            </FooterLinkItems>
            <Separator />
            <FooterLinkItems>
              <FooterLinkTitle>
                <strong>Email</strong>
              </FooterLinkTitle>
              <FooterLinkList>
                <FooterLinkItem>info@payastechnologies.com</FooterLinkItem>
                <FooterLinkItem>hr@payastechnologies.com</FooterLinkItem>
                <FooterLinkItem>jobs@payastechnologies.com</FooterLinkItem>
              </FooterLinkList>
            </FooterLinkItems>
            <Separator />
            <FooterLinkItems>
              <FooterLinkTitle>
                <strong>Contact Us</strong>
              </FooterLinkTitle>
              <FooterLinkList>
                <FooterLinkItem>+91 8767591462</FooterLinkItem>
                <FooterLinkItem>+91 7822869695</FooterLinkItem>
              </FooterLinkList>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Payas Technologies</SocialLogo>
            <WebsiteRights>
              Payas Technology © {new Date().getFullYear()}
            </WebsiteRights>
            <WebsiteRights>All Rights Reserved</WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/payastech.pune"
                target="_blank"
              >
                <i class="fa-brands fa-facebook"></i>
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/payas_technologies_training/"
                target="_blank"
              >
                <i class="fa-brands fa-instagram"></i>
              </SocialIconLink>
              <SocialIconLink
                href="https://www.youtube.com/@payas_technologies"
                target="_blank"
              >
                <i class="fa-brands fa-youtube"></i>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
