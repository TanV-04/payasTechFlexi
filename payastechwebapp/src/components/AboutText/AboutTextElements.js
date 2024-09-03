import styled from "styled-components";

export const Background = styled.div`
  background: #0c0c0c;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: -1;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 0.05; /* opacity of the video */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const Separator = styled.div`
  height: 0.5px;
  width: 30%
  max-width: 600px;
  background: #fff;
  margin: 20px auto;
  display: block;
`;
