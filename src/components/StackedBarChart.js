import React, { PureComponent } from 'react';
import { flatten } from 'lodash';
import { scaleBand, scaleLinear, scaleOrdinal } from 'd3-scale';
import {  schemeCategory10  } from 'd3-scale-chromatic';
import { stack } from 'd3-shape';
import { max } from 'd3-array';
import { timeFormat } from 'd3-time-format';
import { Axis, AxisOrientation } from "./Axis";

const margins = {
  left: 60,
  right: 60,
  top: 60,
  bottom: 60,
};

const BAR_PADDING = 0.1;

export class StackedBarChart extends PureComponent {
  state = {
    bars: [], // array of rects

    // d3 helpers
    xScale: scaleBand(),
    yScale: scaleLinear(),
    colorScale: scaleOrdinal(schemeCategory10),
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const {data, width, height, keys} = nextProps;
    const {xScale, yScale, colorScale} = prevState;

    const xAccessor = (d) => d.index;
    const timeDomain = data.map(xAccessor);

    const stacked = stack().keys(keys);
    const stackedData = stacked(data);

    const maxYDomain = max(stackedData, (d) => (
      max(d, (d2) => (
        d2[1]
      ))
    ));

    colorScale.domain([0, keys.length-1]);

    xScale
      .rangeRound([margins.left, width - margins.right])
      .padding(BAR_PADDING)
      .domain(timeDomain);

    const yScaleRange = [height - margins.bottom, margins.top];
    yScale
      .range(yScaleRange)
      .domain([0, maxYDomain])
      .nice();

    const bars = stackedData.map((stackedItem, index) => {
      return stackedItem.map(value => {
        const x = xScale(xAccessor(value.data));
        const y = yScale(value[1]);
        const barHeight = Math.abs(yScale(value[0]) - y);
        const barWidth = xScale.bandwidth();
        const fill = colorScale(index);

        return {
          x,
          y,
          height: barHeight,
          width: barWidth,
          fill,
        };
      });
    });

    return {
      bars: flatten(bars),
    };
  }

  render() {
    const { width, height } = this.props;
    const { bars, xScale, yScale} = this.state;

    return (
      <svg width={width} height={height}>
        {bars.map((d, i) => (
          <rect key={i} x={d.x} y={d.y} width={d.width} height={d.height} fill={d.fill}/>
        ))}
        <g>
          <Axis
            timeFormat={timeFormat('%b')}
            scale={xScale}
            orientation={AxisOrientation.BOTTOM}
            x={0}
            y={height - margins.bottom}
          />
          <Axis
            timeFormat={(d) => `${d}`}
            scale={yScale}
            orientation={AxisOrientation.LEFT}
            x={margins.left}
            y={0}
          />
        </g>
      </svg>
    );
  }
}
