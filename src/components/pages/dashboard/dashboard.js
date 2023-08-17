'use client';

import { Calendar } from "@fullcalendar/core";
import { useEffect } from "react";
import dayGridPlugin from '@fullcalendar/daygrid';

/**
 * Gets the end date for the calendar.
 * Special mention to FullCalendar for the Calendar component.
 * https://fullcalendar.io/
 * https://github.com/fullcalendar/fullcalendar
 * @param {string} stringStartDate String related to the start date.
 * @param {string} stringEndDate String related to the end date.
 * @returns A string with the end date to be used on the calendar.
 */
function getEndDateForCalendar(stringStartDate, stringEndDate) {
  const endDate = new Date(stringEndDate);
  const startDate = new Date(stringStartDate);
  const isSameDate = (endDate.getDate() === startDate.getDate()) && (endDate.getMonth() === startDate.getMonth()) && (endDate.getFullYear() === startDate.getFullYear());
  if (isSameDate) {
    return stringEndDate;
  }

  endDate.setDate(endDate.getDate() + 1);

  return endDate.toISOString();
}

const colorList = ['#f58742', '#f5d142', '#42adf5', '#7242f5'];
export default function Dashboard({productions}) {
  useEffect(()=> {
    const formattedProductions = productions.map((production) => {
      const color = colorList.shift();
      colorList.push(color);
      const endDate = getEndDateForCalendar(production.startDate, production.endDate);
      return {
        title: production.productName,
        date: production.startDate,
        end: endDate,
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
        <h2 className="calendarTitle">Producciones en proceso</h2>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div id="calendar" data-calendar-container></div>
      </div>
    </div>
  );
}
