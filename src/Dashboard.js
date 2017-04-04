import React, { Component } from 'react';
import ImpactMetric from './ImpactMetric.js'
import SpeciesMetric from './SpeciesMetric.js'

import TourismIcon from './icons/tourism.svg'
import JobGrowthIcon from './icons/job-growth.svg'
import HouseholdIncomeIcon from './icons/household-income.svg'
import ExportsIcon from './icons/exports.svg'
import FishIcon from './icons/fish.svg'
import LeafIcon from './icons/leaf.svg'
import MolluskIcon from './icons/mollusk.svg'
import WaterImage from './icons/water.svg'

import './Dashboard.css';


class Dashboard extends Component {

  render() {
    return (
      <div className="Dashboard">
        <div className="Column Column-left">
          <div className="Column-title">Water Health</div>
          <img src={WaterImage}/>
        </div>
        <div className="Column Column-center">
          <div className="Column-title">Indicator Species</div>
          <SpeciesMetric
            label="Eryngium atlanticum"
            icon={LeafIcon}
          />
          <SpeciesMetric
            label="Mercuria confusa"
            icon={MolluskIcon}
          />
          <SpeciesMetric
            label="Barbus nasus"
            icon={FishIcon}
          />
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
