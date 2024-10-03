import styled from "styled-components";

export const MapContainer = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  border: 2px solid #4a90e2;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-top: 30px;
`;

export const ContactInfoContainer = styled.div`
  max-width: 720px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const InfoHeader = styled.div`
  font-family: Arial, sans-serif;
  color: #333;

  strong {
    font-size: 1.5em;
    color: #4a90e2;
  }

  hr {
    border: 1px solid #4a90e2;
    margin: 10px 0;
  }

  p {
    margin: 10px 0;
    font-size: 1em;
  }

  i {
    margin-right: 5px;
    color: #4a90e2;
  }
`;
