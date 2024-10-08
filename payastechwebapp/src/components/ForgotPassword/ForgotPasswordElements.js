import styled from "styled-components";

export const ForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
  max-width: 400px;
  margin: 50px auto;
  border: 1px solid #e1e1e1;
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background-color: #ffffff; /* White background for contrast */
`;

export const ForgotPasswordTitle = styled.h2`
  margin-bottom: 20px; /* Increased margin for separation */
  font-size: 28px; /* Larger font size for better visibility */
  color: #333; 
  text-align: center; /* Centered text */
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px; 
  margin: 10px 0; 
  border: 1px solid #ccc;
  border-radius: 5px; 
  font-size: 16px;
  transition: border-color 0.3s ease, box-shadow 0.3s ease; 

  &:focus {
    border-color: #007bff; 
    outline: none; 
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); /* Subtle shadow effect */
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 20px; 
  background-color: #FFA500; 
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px; 
  transition: background-color 0.3s ease, transform 0.2s; 
  margin-left: 10px;
  &:hover {
    background-color: #0056b3; 
    transform: translateY(-1px); 
  }

  &:active {
    transform: translateY(0);
  }
`;

// export const Message = styled.p`
//   margin-top: 15px; /* Increased margin for separation */
//   font-size: 14px; /* Smaller font size */
//   color: ${(props) => (props.error ? "red" : "green")}; /* Conditional color based on props */
//   text-align: center; /* Centered text */
// `;
