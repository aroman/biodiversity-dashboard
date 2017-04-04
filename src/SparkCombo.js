import React, { Component } from 'react'
import _ from 'lodash'
import * as Constants from './Constants.js'
import * as SL from 'react-sparklines'

import './SparkCombo.css'

const NUM_PROJECTED_ITEMS = 7

const randNum = () => _.random(0, 3, true)

function randomData(n = 30) {
  return Array.apply(0, Array(n)).map(randNum);
}

class SparkCombo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      historicalData: randomData(20),
      projectedData: [],
    }
    console.log(this.state.historicalData)
    setInterval(this.onInterval.bind(this), Constants.INTERVAL)
  }

  onInterval() {
    const lenProjectedData = this.state.projectedData.length
    if (lenProjectedData > NUM_PROJECTED_ITEMS || lenProjectedData == 0) {
      this.setState({ projectedData: _.takeRight(this.state.historicalData)})
    } else {
      this.setState({ projectedData: this.state.projectedData.concat([randNum()]) })
    }
  }

  render() {
    return (
      <div className="SparkCombo-graphs">
        <div style={{width: '50%'}}>
          <SL.Sparklines data={this.state.historicalData} min={-3} max={3} width={100} height={25} limit={10}>
              <SL.SparklinesLine />
              <SL.SparklinesSpots />
          </SL.Sparklines>
          <div className="SparkCombo-graph-label">6 month history</div>
        </div>
        <div style={{width: '50%', marginLeft: 15}}>
          <div className="SparkCombo-Projection">
            <SL.Sparklines data={this.state.projectedData} min={-3} max={3} width={100} height={25} limit={10}>
                <SL.SparklinesLine style={{ fill: '#1b8dff', stroke: '#01458a' }} />
                {/* <SL.SparklinesReferenceLine type="custom" value={_.takeRight(this.state.historicalData)} /> */}
            </SL.Sparklines>
          </div>
          <div className="SparkCombo-graph-label">6 month projection</div>
        </div>
      </div>
    )
  }

}

export default SparkCombo
