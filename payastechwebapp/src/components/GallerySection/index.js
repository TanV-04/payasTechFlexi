import React from "react";
import ImageGallery from "react-image-gallery";
import img1 from "../../images/galleryImage1.jpg";
import img2 from "../../images/galleryImage2.jpg";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gal() {
  const images = [
    {
      original: img1,
      thumbnail: img1,
      description: "Description for Image 1", // Optional
    },
    {
      original: img2,
      thumbnail: img2,
      description: "Description for Image 2", // Optional
    },
  ];

  return (
    <>
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        {/* {images.map((image, index) => (
          <img key={index} src={image} alt={`Gallery image${index + 1}`} />
        ))} */}
        <h1 className="text-5xl font-extrabold dark:text-black text-center py-8 px-4">
          Gallery
        </h1>
        <ImageGallery items={images} />
      </div>
    </>
  );
}
