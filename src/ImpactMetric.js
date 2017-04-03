import React, { Component } from 'react';
import * as Constants from './Constants.js'
import * as SL from 'react-sparklines';
import { boxMullerRandom, randomData } from './DataUtils.js'

import './ImpactMetric.css';

class ImpactMetric extends Component {

  constructor(props) {
      super(props);
      this.state = { data: randomData(20) };
      setInterval(() =>
        this.setState({
            data: this.state.data.concat([boxMullerRandom()])
        }), Constants.INTERVAL);
  }

  render() {
    let {label, icon, percentage, units, value} = this.props
    percentage = this.state.data.slice(-1).pop()
    const statsColor = (percentage > 0) ? Constants.GREEN : Constants.RED
    const statsSymbol = (percentage > 0) ? '▲' : '▼'
    const statsPercentage = (percentage > 0) ? percentage : -percentage
    return (
      <div className="Impact-panel">
        <div className="Impact-panel-header">
          <div className="Impact-panel-header-icon">
            <img src={icon} alt={label}/>
          </div>
          <div className="Impact-panel-header-label">{label}</div>
      </div>
      <div className="Impact-panel-stats">
        <div className="Impact-panel-stats-percentage" style={{color:statsColor}}>{statsSymbol} {statsPercentage.toFixed(1)}%</div>
        <div className="Impact-panel-stats-value-container">
          <div className="Impact-panel-stats-units">{units}</div>
          <div className="Impact-panel-stats-value" style={{color:statsColor}}>{value}</div>
        </div>
      </div>
      <SL.Sparklines data={this.state.data} limit={20}>
          <SL.SparklinesLine />
          <SL.SparklinesSpots />
      </SL.Sparklines>
    </div>
    )
  }

}

export default ImpactMetric;
