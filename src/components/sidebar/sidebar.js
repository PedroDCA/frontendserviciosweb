"use client"

import "bootstrap/dist/css/bootstrap.css";
import ExpandableOption from '../dropdown/base/expandableOption';
import { useEffect } from "react";
import Link from "next/link";
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
      name: 'Crear nuevo plano de producción'
    },
    {
      link: '/user/product/start',
      name: 'Crear nueva producción'
    },
  ]
};

const optionList = [dashboardOption, workersOption, toolsOption, materialsOption, productionChainOption];

export default function Sidebar() {
  useEffect(() => {
    require('../../events/dropdown/base/collapseToggle');
  }, []);
  return (
    <div className="flex-shrink-0 sidebar">
      <a href="/user" className="d-flex p-3 align-items-center pb-3 mb-3  text-decoration-none border-bottom">
        <svg className="bi pe-none me-2" width="30" height="24"></svg>
        <span className="white-color">Menu</span>
      </a>
      <ul className="list-unstyled ps-0 sidebar-list">
        {optionList.map((option, index) => {
          return (<ExpandableOption optionInformation={option} key={index} position={index}/>)
        })}
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <Link href="/" className="d-inline-flex text-decoration-none white-color">Salir de sesión</Link>
        </li>
      </ul>
    </div>
  )
}
