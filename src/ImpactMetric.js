import React, { Component } from 'react'
import SparkCombo from './SparkCombo.js'
import * as Constants from './Constants.js'

import './ImpactMetric.css'

class ImpactMetric extends Component {

  render() {
    let {label, icon, percentage, units, value} = this.props
    const statsColor = (percentage > 0) ? Constants.GREEN : Constants.RED
    const statsSymbol = (percentage > 0) ? '▲' : '▼'
    const statsPercentage = (percentage > 0) ? percentage : -percentage
    return (
      <div className="ImpactMetric">
        <div className="ImpactMetric-header">
          <div className="ImpactMetric-header-icon">
            <img src={icon} alt={label}/>
          </div>
          <div className="ImpactMetric-header-label">{label}</div>
        </div>
        <div className="ImpactMetric-stats">
          <div className="ImpactMetric-stats-percentage" style={{color:statsColor}}>{statsSymbol} {statsPercentage.toFixed(1)}%</div>
          <div className="ImpactMetric-stats-value-container">
            <div className="ImpactMetric-stats-units">{units}</div>
            <div className="ImpactMetric-stats-value" style={{color:statsColor}}>{value}</div>
          </div>
        </div>
        <SparkCombo/>
      </div>
    )
  }

}

export default ImpactMetric
