'use client';

import { Calendar } from "@fullcalendar/core";
import { useEffect } from "react";
import dayGridPlugin from '@fullcalendar/daygrid';

const colorList = ['#f58742', '#f5d142', '#42adf5', '#7242f5'];
export default function Dashboard({productions}) {
  useEffect(()=> {
    const formattedProductions = productions.map((production) => {
      const color = colorList.shift();
      colorList.push(color);
      return {
        title: production.productName,
        date: production.startDate.toISOString(),
        end: production.endDate.toISOString(),
        color
      }
    });
    const calendarContainer = document.querySelector('[data-calendar-container]');
    const calendar = new Calendar(calendarContainer, {
      plugins: [dayGridPlugin],
      editable: false,
      selectable: false,
      initialView: 'dayGridMonth',
      events: formattedProductions,
    });
    
    calendar.render();
  }, [productions]);
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
