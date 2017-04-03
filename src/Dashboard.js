import React, { Component } from 'react';
import './Dashboard.css';

import TourismIcon from './tourism.svg'
import JobGrowthIcon from './job-growth.svg'
import HouseholdIncomeIcon from './household-income.svg'
import ExportsIcon from './exports.svg'

class HumanImpactPanel extends Component {
  render() {
    const {label, icon} = this.props
    return (
      <div className="Impact-panel">
        <div className="Impact-panel-header">
          <div className="Impact-panel-header-icon">
            <img src={icon} alt={label}/>
          </div>
          <div className="Impact-panel-header-label">{label}</div>
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
          <HumanImpactPanel label="Exports" icon={ExportsIcon}/>
          <HumanImpactPanel label="Household Income" icon={HouseholdIncomeIcon}/>
          <HumanImpactPanel label="Job Growth" icon={JobGrowthIcon}/>
          <HumanImpactPanel label="Tourism" icon={TourismIcon}/> 
        </div>
      </div>
    );
  }
}

export default Dashboard;
