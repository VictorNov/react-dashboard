import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective,
  Inject, DateTime, Legend, SplineAreaSeries} from '@syncfusion/ej2-react-charts'

import { Header } from '../../components'
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy'

const Area = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category='Графики' title='Уровень Инфляции в процентах' />

      <ChartComponent
        id='area-chart'
        height='420px'
        width='100%'
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: {width: 0} }}
        tooltip={{ enable: true }}
        margin={{ left: 20, right: 40, top: 40, bottom: 20 }}
        className='rounded-2xl'
      >
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        <SeriesCollectionDirective>
          {areaCustomSeries.map((data, index) => (
            <SeriesDirective
              key={index}
              {...data}
            />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Area