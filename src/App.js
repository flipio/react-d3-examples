import React, {PureComponent} from 'react';
import './App.css';

import {Colors, barChartData} from "./Constants";
import {generateLineData} from './Util';

import {BarChart} from './components/BarChart';
import {LineChart} from './components/LineChart';
import {PieChart} from './components/PieChart';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React D3 Playground</h1>
        </header>
        <div className="charts-container">
          <BarChart
            width={400}
            height={500}
            data={barChartData}
          />
          <LineChart
            width={400}
            height={500}
            multi
            data={
              [
                generateLineData(),
                generateLineData(),
                generateLineData()
              ]
            }
          />
          <LineChart
            width={400}
            height={500}
            showDataPoints
            multi
            data={
              [
                generateLineData(),
                generateLineData()
              ]
            }
          />
          <LineChart
            width={400}
            height={500}
            showDataPoints
            multi
            curve
            data={
              [
                generateLineData()
              ]
            }
          />
          <PieChart
            width={200}
            height={200}
            data={[20, 10, 50, 70, 30]}
            colors={Colors.path}
            arcWidth={30}
          />
        </div>
      </div>
    );
  }
}

export default App;
