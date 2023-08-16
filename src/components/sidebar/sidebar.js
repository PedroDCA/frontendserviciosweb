"use client"

import "bootstrap/dist/css/bootstrap.css";
import ExpandableOption from '../dropdown/base/expandableOption';
import { useEffect } from "react";
import Link from "next/link";
import logo from "../../app/image/logo.png"
import Image from "next/image";

const dashboardOption = {
  title: 'Dashboard',
  options: [
    {
      link: '/user/dashboard',
      name: 'Ver calendario'
    }
  ]
};

const workersOption = {
  title: 'Trabajadores',
  options: [
    {
      link: '/user/worker',
      name: 'Ver todos'
    }
  ]
};

const toolsOption = {
  title: 'Herramientas',
  options: [
    {
      link: '/user/tool',
      name: 'Ver todas'
    },
  ]
};

const materialsOption = {
  title: 'Materiales',
  options: [
    {
      link: '/user/material',
      name: 'Ver todos'
    },
  ]
};

const productionChainOption = {
  title: 'Cadenas de producción',
  options: [
    {
      link: '/user/product/create',
      name: 'Nuevo plano de producción'
    },
    {
      link: '/user/product/start',
      name: 'Nueva producción'
    },
  ]
};

const optionList = [dashboardOption, workersOption, toolsOption, materialsOption, productionChainOption];

export default function Sidebar() {
  useEffect(() => {
    require('../../events/dropdown/base/collapseToggle');
  }, []);
  return (
    <div className="sidebar">
      <a href="/user" className="d-flex flex-column justify-content-center align-items-center pt-4 pb-4">
      <Image src={logo} width={150} alt="Logo"/>
      </a>
      <ul className="list-unstyled ps-0 sidebar-list">
        {optionList.map((option, index) => {
          return (<ExpandableOption optionInformation={option} key={index} position={index}/>)
        })}
        <li className="border-top my-3"></li>
        <li className="mb-1 signout ">
          <Link href="/" className="d-inline-flex text-decoration-none white-color"> ❯ Salir de sesión</Link>
        </li>
      </ul>
    </div>
  )
}
