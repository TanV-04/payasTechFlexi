import React from "react";
import "../App.css";

export default function Banner({ images }) {
  return (
    <div className="banner-wrapper py-10 bg-gray-800">
      <div className="wrapper max-w-screen-lg mx-auto px-4">
        <div className="images flex gap-4 mt-10 animate-swipe">
          {/* a prop is destructured directly from the props object in the function signature */}
          {/* images.map() is used to iterate over the array and render an img tag for each image object */}
          {/* the key prop is added to each img element to provide a unique identifier for each list item, which helps react identify which items have been changed */}
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.name}
              className="h-[10rem] max-w-[500px] object-cover rounded-lg shadow-lg border border-gray-700 transition-transform transform hover:scale-105"
            />
          ))}
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.name}
              className="h-[10rem] max-w-[500px] object-cover rounded-lg shadow-lg border border-gray-700 transition-transform transform hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
