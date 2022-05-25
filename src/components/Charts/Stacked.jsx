import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective,
  Inject, Legend, Category, StackingColumnSeries, Tooltip}
  from '@syncfusion/ej2-react-charts'

import { stackedCustomSeries, stackedPrimaryYAxis,
  stackedPrimaryXAxis } from '../../data/dummy'

const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
      id='stack-chart'
      width={width}
      height={height}
      legendSettings={{ visible: true }}
      tooltip={{ enable: true }}
      primaryXAxis={ stackedPrimaryXAxis }
      primaryYAxis={ stackedPrimaryYAxis }
      chartArea={{ border: { width: 0 } }}
    >
      <Inject services={[StackingColumnSeries, Category, Tooltip, Legend]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((data, index) => (
          <SeriesDirective
            key={index}
            {...data}
          />
        ))}

      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked