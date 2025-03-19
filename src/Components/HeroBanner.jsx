import React, { useEffect, useState } from "react";

const images = [
  "/Panels.png",
  "/Panel2.png",
  "/sbattery.png",
  "/sbattery2.png"
];

const HeroBanner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <img
        src={images[currentImage]}
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <h1 className="text-3xl font-bold">Welcome to Versaflex Technologies</h1>
      </div>
    </div>
  );
};

export default HeroBanner;
