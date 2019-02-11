import React, {PureComponent, createRef} from 'react';
import {select} from 'd3-selection';
import {axisLeft, axisBottom, axisRight, axisTop} from 'd3-axis';

export const AxisOrientation = {
  TOP: 'TOP',
  LEFT: 'LEFT',
  BOTTOM: 'BOTTOM',
  RIGHT: 'RIGHT',
};

export class Axis extends PureComponent {
  state = {};

  axisRef = createRef();

  static getAxis(orientation = AxisOrientation.LEFT) {
    switch (orientation) {
      case AxisOrientation.TOP:
        return axisTop;
      case AxisOrientation.BOTTOM:
        return axisBottom;
      case AxisOrientation.LEFT:
        return axisLeft;
      case AxisOrientation.RIGHT:
        return axisRight;
      default:
        return axisLeft;
    }
  }

  static getDerivedStateFromProps(nextProps) {
    const {orientation, scale, tickFormat} = nextProps;
    const d3Axis = Axis.getAxis(orientation);

    const tFormat = tickFormat ? tickFormat : (d) => d;

    const axis = d3Axis()
      .scale(scale)
      .tickFormat(tFormat);

    return {
      axis,
    }
  }

  componentDidMount() {
    this.updateAxis();
  }

  componentDidUpdate() {
    this.updateAxis();
  }

  updateAxis() {
    const axis = select(this.axisRef.current)
      .call(this.state.axis);

    if (this.props.orientation === AxisOrientation.BOTTOM && this.props.rotateText) {
      axis.selectAll('text')
        .style('text-anchor', 'end')
        .attr('dx', '-1em')
        .attr('dy', '-.2em')
        .attr('transform', 'rotate(-65)');
    }
  }

  render() {
    const {x, y} = this.props;

    return (
      <g ref={this.axisRef} transform={`translate(${x}, ${y})`}/>
    );
  }
}
