import React from "react";
import Navbar from "../components/Navbar";
import BackToTopButton from "../components/BackToTopButton";
import Footer from "../components/Footer";
import ELearningSection from "../components/ELearningSection";

export default function ELearning() {
  return (
    <>
      <Navbar />
      <ELearningSection />
      <BackToTopButton />
      <Footer />
    </>
  );
}
