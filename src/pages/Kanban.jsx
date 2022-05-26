import React from 'react'
import { KanbanComponent, ColumnDirective, ColumnsDirective }
  from '@syncfusion/ej2-react-kanban'

import { kanbanData, kanbanGrid } from '../data/dummy'
import { Header } from '../components'

const Kanban = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Приложения' title='Канбан' />

      <KanbanComponent
        id='kanban'
        dataSource={kanbanData}
        cardSettings={{
          contentField: 'Summary',
          headerField: 'Id'
        }}
        keyField='Status'
        swimlaneSettings={{ keyField: 'Assignee' }}
        className='rounded-2xl p-4'
      >
        <ColumnsDirective>
          {kanbanGrid.map((data, index) => (
            <ColumnDirective
              key={index}
              {...data}
            />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban