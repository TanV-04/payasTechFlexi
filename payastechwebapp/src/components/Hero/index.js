import React, { useState } from "react";
import "../../App.css";
import { HeroBg, Separator, StyledIcon } from "./HeroElements";
import { HeroContainer } from "./HeroElements";
import Video from "../../videos/videoBg.mp4";
import { VideoBg } from "./HeroElements";
import { HeroContent } from "./HeroElements";
import { HeroH1, HeroBtnWrapper, HeroP } from "./HeroElements";
import { Button } from "../ButtonElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Enquiry from "../Enquiry";

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
        <HeroH1 className="poppins">Payas Technologies</HeroH1>
        <Separator />
        <HeroP className="dmSans">
          <strong>Payas Technologies</strong>, established in <strong>2016</strong>, is a leading
          <strong> IT HUB </strong>specializing in <strong>IT Training</strong>,
          <strong> IT Placement</strong>, and <strong>IT Recruitment </strong>
          services. With a strong focus on empowering individuals with
          cutting-edge skills and connecting them with lucrative career
          opportunities. Since its inception, <strong>Payas Technologies</strong> has trained
          25000+ students and professionals across the globe and has upheld a
          commitment to excellence, professionalism, and client satisfaction.
          The company's innovative approach, combined with a deep understanding
          of the ever-evolving IT landscape, positions it as a trusted partner
          for individuals seeking to enhance their IT skills, organizations
          looking for top-tier IT talent, and businesses aiming to stay ahead in
          the competitive digital realm.
        </HeroP>
        <HeroBtnWrapper>
          <Button className="dmSans" onMouseEnter={onHover} onMouseLeave={onHover} to="/about">
            Read More!
            <StyledIcon icon={faArrowRight} />
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};
