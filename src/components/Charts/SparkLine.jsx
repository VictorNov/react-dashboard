import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

const SparkLine = ({ id, color, currentColor, data, height, type, width }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      type={type}
      dataSource={data}
      xName='x'
      yName='yval'
      fill={color}
      lineWidth={1}
      valueType='Numeric'
      padding={{ left: 5, right: 5, top: 5, bottom: 5 }}
      border={{ color: currentColor, width: 2 }}
      tooltipSettings={{
        visible: true,
        format: '${x}: данные ${yval}',
        fill: color,
        trackLineSettings: {
          visible: true,
          color: 'gray'
        },
      }}
      markerSettings={{
        visible: ['All'],
        size: 3,
        fill: color,
      }}
      axisSettings={{
        lineSettings: {
          visible: true,
          color: 'gray',
          dashArray: '5'
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine