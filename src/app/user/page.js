"use client";

import Carousel from "@/components/homepage/carousel";

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage-content">
        <h1 className="big-title">Integration</h1>
      </div>
      <div className="carousel-container">
        <Carousel/>
      </div>
    </div>
  );
} 