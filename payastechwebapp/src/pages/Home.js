import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { images } from "../assets/data";
import { HeroSection } from "../components/Hero";
import InfoSection from "../components/InfoSection";
import Enquiry from "../components/Enquiry";


export default function Home() {
  return (
    <div>
      {/* <Banner images={images} /> */}
      <Navbar />
      {/* <h1>this is home</h1> */}
      <HeroSection />
      {/* <InfoSection /> */}
      <Enquiry />
      <Footer />
    </div>
  );
}
