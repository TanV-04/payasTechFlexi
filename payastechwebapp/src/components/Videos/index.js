import { React, useState } from "react";
// import vid1 from "../../videos/videoBg.mp4";
// import vid2 from "../../videos/videoBg1.mp4";
import vid1 from "../../videos/coreJavaSess1.mp4";
import { VideoModal } from "../VideoModal";

import {
  ELearningContainer,
  ELearningCard,
  ELearningH1,
  ELearningH2,
  ELearningIcon,
  ELearningP,
  ELearningWrapper,
  ELearningVideo,
} from "./VideosElements";

const ELearning = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const handleVideoClick = (videoSrc) => {
    setSelectedVideo(videoSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedVideo("");
  };

  const courses = [
    {
      title: "Core Java Basic",
      description: "Learn the basics of Core Java",
      videoSrc: vid1,
    },

    {
      title: "Core Java",
      description: "Learn the Core Java",
      videoSrc: vid1,
    },
    {
      title: "Salesforce",
      description: "Learn what is Salesforce",
      videoSrc: vid1,
    },
  ];

  // add proper functionality for the X button

  return (
    <>
      <ELearningContainer>
        <ELearningH1>Videos</ELearningH1>
        <ELearningWrapper>
          {courses.map((course, index) => (
            <ELearningCard
              key={index}
              onClick={() => handleVideoClick(course.videoSrc)}
            >
              <ELearningVideo src={course.videoSrc} />
              <ELearningH2>{course.title}</ELearningH2>
              <ELearningP>{course.description}</ELearningP>
            </ELearningCard>
          ))}
        </ELearningWrapper>
      </ELearningContainer>
      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoSrc={selectedVideo}
      />
    </>
  );
};

export default ELearning;
