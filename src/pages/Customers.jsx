import React from 'react'
import {
  GridComponent, ColumnsDirective, ColumnDirective, Page,
  Selection, Inject, Edit, Toolbar, Sort, Filter, Resize,
  Search } from '@syncfusion/ej2-react-grids'

import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md: p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Таблица' title='Покупатели' />

      <GridComponent
        width='auto'
        dataSource={customersData}
        allowPaging
        allowSorting
        allowFiltering
        allowResizing
        toolbar={['Delete', 'Search']}
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
          mode: 'Dialog'
        }}
        filterSettings={{ type: 'Menu' }}
        enableStickyHeader
      >
        <ColumnsDirective>
          {customersGrid.map((data, index) => (
            <ColumnDirective
              key={index}
              {...data}
            />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Page, Toolbar, Selection, Edit, Sort, Filter, Resize, Search]}
        />
      </GridComponent>
    </div>
  )
}

export default Customers