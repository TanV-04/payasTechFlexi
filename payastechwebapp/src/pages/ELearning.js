import React from "react";
import Navbar from "../components/Navbar";
import BackToTopButton from "../components/BackToTopButton";
import Footer from "../components/Footer";
import ELearningSection from "../components/ELearningSection";

export default function ELearning() {
  return (
    <div>
      <Navbar />
      <h1>this is ELearning</h1>
      <ELearningSection />
      <Footer />
      <BackToTopButton />
    </div>
  );
}
