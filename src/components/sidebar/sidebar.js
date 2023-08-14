"use client"

import "bootstrap/dist/css/bootstrap.css";
import ExpandableOption from '../dropdown/base/expandableOption';
import { useEffect } from "react";
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
      <a href="/" className="d-flex p-3 align-items-center pb-3 mb-3  text-decoration-none border-bottom">
        <svg className="bi pe-none me-2" width="30" height="24"></svg>
        <span className="white-color">Menu</span>
      </a>
      <ul className="list-unstyled ps-0 sidebar-list">
        {optionList.map((option, index) => {
          return (<ExpandableOption optionInformation={option} key={index} position={index}/>)
        })}
        <li className="border-top my-3"></li>
        <li className="mb-1">
          <button className="btn btn-toggle d-inline-flex align-items-center white-color border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
            Account
          </button>
          <div className="collapse" id="account-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
              <li><a href="#" className="link-dark d-inline-flex text-decoration-none white-color">New...</a></li>
              <li><a href="#" className="link-dark d-inline-flex text-decoration-none white-color">Profile</a></li>
              <li><a href="#" className="link-dark d-inline-flex text-decoration-none white-color">Settings</a></li>
              <li><a href="#" className="link-dark d-inline-flex text-decoration-none white-color">Sign out</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  )
}
