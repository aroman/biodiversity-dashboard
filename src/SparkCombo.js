import React, { Component } from 'react'
import * as Constants from './Constants.js'
import * as SL from 'react-sparklines'
import { boxMullerRandom, randomData } from './DataUtils.js'

import './SparkCombo.css'

const NUM_PROJECTED_ITEMS = 7

class SparkCombo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      historicalData: randomData(20),
      projectedData: [],
    };
    setInterval(this.onInterval.bind(this), Constants.INTERVAL)
  }

  onInterval() {
    const lenProjectedItems = this.state.projectedData.length
    if (lenProjectedItems > NUM_PROJECTED_ITEMS || lenProjectedItems == 0) {
      this.setState({ projectedData: this.state.historicalData.slice(0, 3) })
    } else {
      this.setState({ projectedData: this.state.projectedData.concat([boxMullerRandom()]) })
    }
  }

  render() {
    return (
      <div className="SparkCombo-graphs">
        <div style={{width: '50%'}}>
          <SL.Sparklines data={this.state.historicalData} width={100} height={25} limit={10}>
              <SL.SparklinesLine />
              <SL.SparklinesSpots />
          </SL.Sparklines>
          <div className="SparkCombo-graph-label">6 month history</div>
        </div>
        <div style={{width: '50%', marginLeft: 20}}>
          <div className="SparkCombo-Projection">
            <SL.Sparklines data={this.state.projectedData} width={100} height={25} limit={10}>
                <SL.SparklinesLine style={{ fill: '#1b8dff', stroke: '#01458a' }} />
            </SL.Sparklines>
          </div>
          <div className="SparkCombo-graph-label">6 month projection</div>
        </div>
      </div>
    )
  }

}

export default SparkCombo
