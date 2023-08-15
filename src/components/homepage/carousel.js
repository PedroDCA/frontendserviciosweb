"use client";

import Image from "next/image";
import { useEffect } from "react";
import Carousel1 from '../../app/image/carousel1.jpg'
import Carousel2 from '../../app/image/carousel2.jpg'
import Carousel3 from '../../app/image/carousel3.jpg'

export default function Carousel(){
  useEffect(() => {
    require('bootstrap');
  }, []);
  return (
  <div>
    <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="carousel-control-custom" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active carousel-control-custom" aria-current="true"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="carousel-control-custom"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item">
          <Image src={Carousel1} className="carousel-image" alt="Imagen de mueble"/>
        </div>
        <div className="carousel-item active">
          <Image src={Carousel2} className="carousel-image" alt="Imagen de mueble"/>
        </div>
        <div className="carousel-item">
          <Image src={Carousel3} className="carousel-image" alt="Imagen de mueble"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden ">Previous</span>
      </button>
      <button className="carousel-control-next carousel-control-custom" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>);
}