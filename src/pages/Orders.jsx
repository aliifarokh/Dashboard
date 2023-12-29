import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'
import { Header } from '../components'

const Orders = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title="Orders" category="Page" />
      <GridComponent
        id='gridcolumn'
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, i) => (
            <ColumnDirective key={i} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport ]} />
      </GridComponent>
    </div>
  )
}

export default Orders