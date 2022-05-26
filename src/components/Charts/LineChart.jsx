import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective,
  Inject, DateTime, Legend, LineSeries, Tooltip} from '@syncfusion/ej2-react-charts'

import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy'

const LineChart = () => {
  return (
    <ChartComponent
      id='line-chart'
      height='420px'
      width='100%'
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: {width: 0} }}
      tooltip={{ enable: true }}
      margin={{ left: 20, right: 40, top: 40, bottom: 20 }}
      className='rounded-2xl'
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((data, index) => (
          <SeriesDirective
            key={index}
            {...data}
          />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart