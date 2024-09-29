import React from "react";
import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  width: 80%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1.5rem;
  color: #fff;
  padding: 5px 10px;
  cursor: pointer;
`;

export const Video = styled.video`
  width: 100%;
`;
