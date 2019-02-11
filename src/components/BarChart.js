import React, {PureComponent} from 'react';
import {scaleLinear, scaleBand} from 'd3-scale';
import {max} from 'd3-array';
import {Axis, AxisOrientation} from './Axis';
import {timeFormat} from 'd3-time-format';
import {Colors} from '../Constants';

const margins = {
  top: 60,
  left: 60,
  right: 60,
  bottom: 60,
};

export class BarChart extends PureComponent {

  state = {
    bars: [], // array of rects
    hoveredBar: null,

    // d3 helpers
    xScale: scaleBand(),
    yScale: scaleLinear(),
  };


  hoverBar = (index, select) => {
    let hoveredBar = null;
    if (select) {
      this.state.bars.forEach((d, i) => {
        if (i === index) {
          hoveredBar = i;
        }
      });
    }

    this.setState({
      hoveredBar,
    });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (!nextProps.data) return null; // data hasn't been loaded yet so do nothing

    const {data, width, height} = nextProps;
    const {xScale, yScale} = prevState;

    // data has changed, so recalculate scale domains
    const timeDomain = data.map(d => d.date);
    const tempMax = max(data, d => d.value);

    xScale
      .rangeRound([margins.left, width - margins.right])
      .padding(.1)
      .domain(timeDomain);

    yScale
      .range([height - margins.bottom, margins.top])
      .domain([0, tempMax]);

    // calculate x and y for each rectangle
    const bars = data.map(d => {
      const y1 = yScale(d.value);
      const y2 = yScale(0);

      return {
        x: xScale(d.date),
        y: y1,
        height: y2 - y1,
        width: xScale.bandwidth(),
        fill: Colors.plain,
      }
    });

    return {
      bars,
    };
  }

  render() {
    const {width, height} = this.props;
    const {hoveredBar, bars, xScale, yScale} = this.state;

    return (
      <svg width={width} height={height}>
        {bars.map((d, i) =>
          (
            <rect
              onMouseOver={() => this.hoverBar(i, true)}
              onMouseOut={() => this.hoverBar(i, false)}
              key={i}
              x={d.x}
              y={d.y}
              width={d.width}
              height={d.height}
              fill={hoveredBar === i ? Colors.selected : d.fill}
            />
          )
        )}
        <g>
          <Axis
            timeFormat={timeFormat('%b')}
            scale={xScale}
            orientation={AxisOrientation.BOTTOM}
            rotateText
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

