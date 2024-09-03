import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const BackToTopButton = () => {
  const Button = styled.button`
    position: fixed;
    bottom: 50px;
    right: 50px;
    height: 50px;
    width: 50px;
    font-size: 20px;
    color: white;
    background: black;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    z-index: 1000;

    @media screen and (max-width: 600px) {
      bottom: 20px; /* Move button higher on smaller screens */
      right: 20px; /* Adjust right position */
    }
  `;

  const [backToTopButton, setBackToTopButton] = React.useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            fontSize: "20px",
            color: "#4CAF50",
            background: "black",
            borderRadius: "50%",
          }}
          onClick={scrollUp}
        >
          <i class="fa-solid fa-arrow-up" />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
