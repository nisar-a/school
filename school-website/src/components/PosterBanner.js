import React, { useState, useEffect } from "react";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import "./PosterBanner.css";

const PosterBanner = ({ altText }) => {
  const [visible, setVisible] = useState(true);
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(false);

  const banners = [
    { src: banner1, alt: altText || "Banner 1" },
    { src: banner2, alt: altText || "Banner 2" }
  ];

  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % banners.length);
        setFade(false);
      }, 400);
    }, 2500); // Change banner every 2.5 seconds
    return () => clearInterval(interval);
  }, [visible, banners.length]);

  if (!visible) return null;

  return (
    <div className="poster-banner">
      <div className="poster-modal">
        <button
          className="close-btn"
          onClick={() => setVisible(false)}
          title="Close"
        >
          &times;
        </button>
        <img
          src={banners[current].src}
          alt={banners[current].alt}
          className={`poster-img${fade ? " fade-out" : ""}`}
        />
      </div>
    </div>
  );
};

export default PosterBanner;