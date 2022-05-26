import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Search,
  Page, Inject, Toolbar} from '@syncfusion/ej2-react-grids'

import { employeesData, employeesGrid } from '../data/dummy'
import { Header } from '../components'

const Employees = () => {
  return (
    <div className='m-2 md:m-10 p-2 md: p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Таблица' title='Сотрудники' />

      <GridComponent
        width='auto'
        dataSource={employeesData}
        allowPaging
        toolbar={['Search']}
        enableStickyHeader
      >
        <ColumnsDirective>
          {employeesGrid.map((data, index) => (
            <ColumnDirective
              key={index}
              {...data}
            />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Search, Toolbar]}
        />
      </GridComponent>
    </div>
  )
}

export default Employees