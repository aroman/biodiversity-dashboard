import React, { Component } from 'react';
import ImpactMetric from './ImpactMetric.js'
import './Dashboard.css';

import TourismIcon from './tourism.svg'
import JobGrowthIcon from './job-growth.svg'
import HouseholdIncomeIcon from './household-income.svg'
import ExportsIcon from './exports.svg'

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <div className="Column Column-center">
          <div className="Column-title">Indicator Species</div>
        </div>
        <div className="Column Column-left">
          <div className="Column-title">Water Health</div>
        </div>
        <div className="Column Column-right">
          <div className="Column-title">Human Impact</div>
          <ImpactMetric
            label="Exports"
            icon={ExportsIcon}
            percentage={-3.2}
            units="MAD"
            value="283.5M / month"
          />
          <ImpactMetric
            label="Household Income"
            icon={HouseholdIncomeIcon}
            percentage={-1.4}
            units="MAD"
            value="5.3K / month"
          />
          <ImpactMetric
            label="Job Growth"
            icon={JobGrowthIcon}
            percentage={0.5}
            units="MAD"
            value="1.2M / month"
          />
          <ImpactMetric
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
