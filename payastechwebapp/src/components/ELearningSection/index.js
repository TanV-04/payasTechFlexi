import React from "react";
import vid1 from "../../videos/videoBg.mp4";
import vid2 from "../../videos/videoBg1.mp4";
import vid3 from "../../videos/coreJavaSess1.mp4";

import {
  ELearningContainer,
  ELearningCard,
  ELearningH1,
  ELearningH2,
  ELearningIcon,
  ELearningP,
  ELearningWrapper,
  ELearningVideo,
} from "./ELearningElements";

const ELearning = () => {
  return (
    <>
      <ELearningContainer>
        <ELearningH1>Lorem Ipsum</ELearningH1>
        <ELearningWrapper>
          <ELearningCard>
            <ELearningVideo src={vid1} />
            <ELearningH2>Lorem Ipsum</ELearningH2>
            <ELearningP></ELearningP>
          </ELearningCard>
          <ELearningCard>
            <ELearningVideo  src={vid2} />
            <ELearningH2>Lorem Ipsum</ELearningH2>
            <ELearningP></ELearningP>
          </ELearningCard>
          <ELearningCard>
            <ELearningVideo  src={vid3} />
            <ELearningH2>Lorem Ipsum</ELearningH2>
            <ELearningP></ELearningP>
          </ELearningCard>
        </ELearningWrapper>
      </ELearningContainer>
    </>
  );
};

export default ELearning;
