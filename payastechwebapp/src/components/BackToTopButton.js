import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const BackToTopButton = () => {

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
            fontSize: "19px",
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
