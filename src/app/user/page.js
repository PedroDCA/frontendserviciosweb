"use client";

import Carousel from "@/components/homepage/carousel";
import Image from "next/image";
import Carousel1 from "../image/carousel1.jpg"
import Carousel2 from "../image/carousel2.jpg"
import Carousel3 from "../image/carousel3.jpg"
import Carousel4 from "../image/carousel4.jpg"
import Carousel5 from "../image/carousel5.jpg"

export default function Homepage() {
  return (
    <div>
        <h1 className="big-title">WELCOME TO INTEGRATION</h1>
        <ul className="foo  foo--five-items">
            <li className="foo__item  h-100">
                <Image src={Carousel1} className="carousel-image h-100" alt="Imagen de mueble"/>
            </li>
            <li className="foo__item h-100">
                <Image src={Carousel2} className="carousel-image h-100" alt="Imagen de mueble"/>
            </li>
            <li className="foo__item h-100">
            <Image src={Carousel3} className="carousel-image h-100" alt="Imagen de mueble"/>
            </li>
            <li className="foo__item h-100">
            <Image src={Carousel4} className="carousel-image h-100" alt="Imagen de mueble"/>
            </li>
            <li className="foo__item h-100">
            <Image src={Carousel5} className="carousel-image h-100" alt="Imagen de mueble"/>
            </li>
        </ul>
    </div>
  );
} 