import React from 'react'
import { GridComponent, ColumnDirective, ColumnsDirective, Resize,
  Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit,
  Inject} from '@syncfusion/ej2-react-grids'

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md: p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Таблица' title='Заказы' />

      <GridComponent
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowFiltering
        editSettings={{
          allowEditing: true,
          allowDeleting: true,
          mode: 'Dialog'
        }}
        allowExcelExport
        allowPdfExport
        allowResizing
        contextMenuItems={contextMenuItems}
        filterSettings={{ type: 'Menu' }}
        enableStickyHeader
      >
        <ColumnsDirective>
          {ordersGrid.map((data, index) => (
            <ColumnDirective
              key={index}
              {...data}
            />
          ))}
        </ColumnsDirective>
        <Inject
          services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]}
        />
      </GridComponent>
    </div>
  )
}

export default Orders