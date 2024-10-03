import styled from "styled-components";

export const ELearningContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 40px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px;
  }
`;

export const ELearningWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); //dynamic columns
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ELearningCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ELearningIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ELearningH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 54px;

  @media screen and (max-width: 480px) {
    margin-top: 5px;
    font-size: 2rem;
  }
`;

export const ELearningH2 = styled.h2`
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
`;

export const ELearningP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ELearningVideo = styled.video`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  border-radius: 10px;
`;
