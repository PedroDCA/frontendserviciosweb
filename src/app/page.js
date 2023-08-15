"use client";

import Carousel from "../components/homepage/carousel";

export default function Homepage(){
  return (
  <div className="homepage column d-flex justify-content-center">
    <div className="homepage-text d-flex flex-column justify-content-center align-items-center w-50">
      <p className="big-title">¿Listo para producir los muebles de tus sueños?</p>
      <div className="column d-flex justify-content-center button-section mt-5">
        <button className="btn btn-outline-primary">Iniciar sesión</button>
        <button className="btn btn-outline-secondary">Registrarse</button>
      </div>
    </div>
    <div className="w-50">
      <Carousel/>
    </div>
  </div>);
}