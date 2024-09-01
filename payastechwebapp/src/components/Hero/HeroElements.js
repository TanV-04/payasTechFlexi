import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  width: 100%;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  opacity: 0.1; /* opacity of the video */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24 px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  max-width: 800px;
  line-height: 1.8;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    padding: 0 15px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
  margin-top: 2px;
`;

export const Separator = styled.div`
  height: 1px;
  width: 100px;
  background: #fff;
  margin: 20px 0;
  display: none;

  @media screen and (min-width: 908px) {
    display: block; /* Show the separator on larger screens */
  }
  @media screen and (max-width: 908px) {
    display: block;
  }
`;
