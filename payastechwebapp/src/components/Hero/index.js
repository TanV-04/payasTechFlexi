import React, { useState } from "react";
import { HeroBg, StyledIcon } from "./HeroElements";
import { HeroContainer } from "./HeroElements";
import Video from "../../videos/videoBg.mp4";
import { VideoBg } from "./HeroElements";
import { HeroContent } from "./HeroElements";
import { HeroH1, HeroBtnWrapper, HeroP } from "./HeroElements";
import { Button } from "../ButtonElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Payas Technologies</HeroH1>
        <HeroP>lorem ipsum</HeroP>
        <HeroBtnWrapper>
          <Button onMouseEnter={onHover} onMouseLeave={onHover} to="/signin">
            Sign In!
            <StyledIcon icon={faArrowRight} />
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};
