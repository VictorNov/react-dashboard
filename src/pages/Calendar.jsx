import React from 'react'
import { ScheduleComponent, Day,
  Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop }
  from '@syncfusion/ej2-react-schedule'

import { scheduleData } from '../data/dummy'
import { Header } from '../components'

const Calendar = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Приложения' title='Календарь' />
      
      <ScheduleComponent
        height='650px'
        eventSettings={{
          dataSource: scheduleData,
          enableTooltip: true,
        }}
        eventRendered={(args) => {
          const color = args.data.CategoryColor
          if (!args.element || !color) {
            return
          }
          if (args.element.classList.contains('e-agenda-item')) {
            args.element.firstChild.style.borderLeftColor = color
          } else {
            args.element.style.backgroundColor = color
          }
        }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar