import React, {PureComponent, Fragment} from 'react';
import {flatten} from 'lodash';
import {scaleLinear} from 'd3-scale';
import {line, curveMonotoneX} from 'd3-shape';
import {extent} from 'd3-array';
import {Axis, AxisOrientation} from './Axis';
import {Colors} from '../Constants';

const margins = {
  left: 60,
  right: 60,
  top: 60,
  bottom: 60,
};

const CIRCLE_RADIUS = 5;

export class LineChart extends PureComponent {
  state = {
    lines: [], // actually line path
    circles: [], // highlight data points on line

    // d3 helpers
    xScale: scaleLinear(),
    yScale: scaleLinear(),
    lineGenerator: line(),
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const {data, width, height, multi, curve, showDataPoints} = nextProps;
    const {xScale, yScale, lineGenerator} = prevState;

    const dataToShow = multi ? flatten(data) : data;

    const xExtent = extent(dataToShow, d => d.x);
    const yExtent = extent(dataToShow, d => d.y);

    const xOffset = 0.98;
    const yOffset = 1.02;

    xScale
      .range([0, width - margins.right - margins.left])
      .domain([xExtent[0] * xOffset, xExtent[1] * yOffset]);

    yScale
      .range([height - margins.bottom - margins.top, 0])
      .domain([yExtent[0] * xOffset, yExtent[1] * yOffset]);

    lineGenerator.x(d => {
      return xScale(d.x);
    });

    lineGenerator.y(d => {
      return yScale(d.y);
    });

    if (curve) {
      lineGenerator.curve(curveMonotoneX)
    }

    const dataToGenerate = multi ? data : [data];
    const lines = [];
    const circles = [];

    dataToGenerate.forEach((line, index) => {
      const fill = Colors.path[index];

      lines.push({
        path: lineGenerator(line),
        fill: fill,
      });

      if (showDataPoints) {
        line.forEach((d) => {
          const circle = {
            x: xScale(d.x),
            y: yScale(d.y),
            fill: fill,
          };
          circles.push(circle);
        });
      }

    });

    return {
      lines,
      circles,
    };
  }

  renderAxis() {
    const {height} = this.props;
    const {xScale, yScale} = this.state;

    return (
      <g>
        <Axis
          scale={xScale}
          orientation={AxisOrientation.BOTTOM}
          x={0}
          y={height - margins.bottom - margins.top}
        />
        <Axis
          scale={yScale}
          orientation={AxisOrientation.LEFT}
          x={0}
          y={0}
        />
      </g>
    )
  }

  renderData() {
    const {lines, circles} = this.state;

    return (
      <Fragment>
        {lines.map((line, i) => {
          return (
            <path
              key={i}
              d={line.path}
              strokeWidth={2}
              fill={'none'}
              stroke={line.fill} />
          );
        })}

        {circles.map((dot, i) => {
          return (
            <circle
              key={i}
              cx={dot.x}
              cy={dot.y}
              fill={dot.fill}
              stroke={'#fff'}
              r={CIRCLE_RADIUS}
            />
          );
        })}
      </Fragment>
    )
  }

  render() {
    const {width, height} = this.props;

    return (
      <svg width={width} height={height}>
        <g transform={`translate(${margins.left}, ${margins.top})`}>
          {this.renderAxis()}
          {this.renderData()}
        </g>
      </svg>
    );
  }
}
