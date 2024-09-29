import { React, useState } from "react";
import {
  ModalContainer,
  ModalContent,
  CloseButton,
  Video,
} from "./VideoModalElements";

export const VideoModal = ({ isOpen, onClose, videoSrc }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <Video controls>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag
        </Video>
      </ModalContent>
    </ModalContainer>
  );
};
