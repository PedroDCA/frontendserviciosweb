'use client';

import ExistingProcess from "@/components/dropdown/base/existingProcess";
import { getProcessesByProductIdUrl } from "@/routing/apiRoutes";
import { Calendar } from "@fullcalendar/core";
import { useEffect, useState } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';

export default function Dashboard({productions}) {
  useEffect(()=> {
    const calendarContainer = document.querySelector('[data-calendar-container]');
    const calendar = new Calendar(calendarContainer, {
      plugins: [dayGridPlugin],
      editable: false,
      selectable: false,
      initialView: 'dayGridMonth',
      events: [
        {title: 'Sillon - Produccion 1', date: '2023-08-08', end: '2023-08-15', color: '#f58742'},
        {title: 'Mesa - Produccion 2', date: '2023-08-06', end: '2023-08-9', color: '#f5d142'},
        {title: 'Mueble - Produccion 3', date: '2023-08-05', end: '2023-08-05', color: '#42adf5'},
        {title: 'Cama - Produccion 4', date: '2023-08-05', end: '2023-08-10', color: '#7242f5'}
      ],
      
    });
    
    calendar.render();
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="p-4">Producciones en proceso</h2>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div data-calendar-container></div>
      </div>
    </div>
  );
}
