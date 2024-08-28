import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import { images } from "../assets/data";

export default function Home() {
  return (
    <div>
      <Banner images={images} />
      <h1>this is home</h1>
    </div>
  );
}
