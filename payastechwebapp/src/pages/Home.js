import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { images } from "../assets/data";
import { HeroSection } from "../components/Hero";

export default function Home() {
  return (
    <div>
      {/* <Banner images={images} /> */}
      <Navbar />
      {/* <h1>this is home</h1> */}
      <HeroSection />
      <Footer />

 
    </div>
  );
}
