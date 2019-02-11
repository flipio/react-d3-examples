import React, { PureComponent } from 'react';
import { arc, pie } from 'd3-shape';


export class PieChart extends PureComponent {
  state = {
    arcGenerator: arc(),
    pieGenerator: pie(),
    slices: [],
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { data, colors, width, arcWidth } = nextProps;
    const { arcGenerator, pieGenerator } = prevState;

    const outerRadius = width / 2;
    const innerRadius = outerRadius - arcWidth;

    pieGenerator.value((d) => d).sort(null);

    arcGenerator.innerRadius(innerRadius).outerRadius(outerRadius);

    const slices = pieGenerator(data).map((value, i) => {
      const slice = {
        path: arcGenerator(value),
        fill: colors[i],
      };

      return slice;
    });

    return {
      slices,
    };
  }

  render() {
    const { width, height  } = this.props;
    const { slices } = this.state;

    return (
      <svg height={height} width={width}>
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          {slices.map((slice, i) => {
            return <path key={i} d={slice.path} fill={slice.fill} />;
          })}
        </g>
      </svg>
    );
  }
}
