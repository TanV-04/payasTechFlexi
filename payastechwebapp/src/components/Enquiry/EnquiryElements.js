import styled from "styled-components";

export const EnquiryContainer = styled.div`
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  // height: 100vh;
  overflow: auto;

  @media (max-width: 908px) {
    padding: 10px 10px;
  }
`;

export const EnquiryContent = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 908px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    padding: 40px;
  }
`;

export const EnquiryHeading = styled.div`
  text-align: center;
`;

export const EnquiryH1 = styled.div`
  color: #333;
  font-size: 42px;
  margin-bottom: 10px;
  margin-top: 200px;

  @media (max-width: 908px) {
    font-size: 40px;
    margin-top: 60px;
  }

  @media (max-width: 908px) {
    font-size: 40px;
    margin-top: 40px;
    font-size: 20px;
  }
`;

export const EnquiryP = styled.p`
  color: #666;
  font-size: 18px;
`;

export const EnquiryAdHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 908px) {
    flex-direction: column;
    width: 50%;
  }
`;

export const EnquiryAd1 = styled.div`
  flex: 1;
  min-width: 200px;
  background: #01bf71;
  color: #fff;
  padding: 50px;
  border-radius: 8px;
  text-align: center;
  font-size: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 908px) {
    padding: 25px;
  }
`;

export const EnquiryAd2 = styled(EnquiryAd1)``;

export const EnquiryAd3 = styled(EnquiryAd1)``;

export const EnquiryAd4 = styled(EnquiryAd1)``;

export const EnquiryForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 908px) {
    width: 50%;
  }
`;

export const EnquiryFormH1 = styled.h2`
  color: #333;
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

export const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  height: 150px;
  resize: vertical;
  resize: none;
`;

export const Select = styled.select`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  background: #01bf71;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #019c58;
  }
`;
