import React, { Component } from 'react';
import './Dashboard.css';

import TourismIcon from './tourism.svg'
import JobGrowthIcon from './job-growth.svg'
import HouseholdIncomeIcon from './household-income.svg'
import ExportsIcon from './exports.svg'

const RED = '#FD9393'
const GREEN = '#1DCC92'


class HumanImpactPanel extends Component {

  render() {
    const {label, icon, percentage, units, value} = this.props
    const statsColor = (percentage > 0) ? GREEN : RED
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
        <div className="Impact-panel-stats-percentage" style={{color:statsColor}}>{statsSymbol} {statsPercentage}%</div>
        <div className="Impact-panel-stats-value-container">
          <div className="Impact-panel-stats-units">{units}</div>
          <div className="Impact-panel-stats-value" style={{color:statsColor}}>{value}</div>
        </div>
      </div>
    </div>
    )
  }

}

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="Column Column-center">
          <div className="Column-title">Water Health</div>
        </div>
        <div className="Column Column-left">
          <div className="Column-title">Indicator Species</div>
        </div>
        <div className="Column Column-right">
          <div className="Column-title">Human Impact</div>
          <HumanImpactPanel
            label="Exports"
            icon={ExportsIcon}
            percentage={-3.2}
            units="MAD"
            value="283.5M / month"
          />
          <HumanImpactPanel
            label="Household Income"
            icon={HouseholdIncomeIcon}
            percentage={-1.4}
            units="MAD"
            value="5.3K / month"
          />
          <HumanImpactPanel
            label="Job Growth"
            icon={JobGrowthIcon}
            percentage={0.5}
            units="MAD"
            value="1.2M / month"
          />
          <HumanImpactPanel
            label="Tourism"
            icon={TourismIcon}
            percentage={9.5}
            units="MAD"
            value="1.4B / month"
          />
        </div>
      </div>
    );
  }
}

export default Dashboard;
