import React, { Component } from 'react'
import * as SL from 'react-sparklines'
import * as Constants from './Constants.js'
import SparkCombo from './SparkCombo.js'
import DoodadImage from './icons/doodad.png'

import './SpeciesMetric.css'
import './Doodad.css'

class CircleThing extends Component {

  render() {
    const size = 175
    return (
      <div className="CircleThing">
        <div className="container">
          <div className="Doodad-label Doodad-label-1">habitat</div>
          <div className="Doodad-label Doodad-label-2">nutrition</div>
          <div className="Doodad-label Doodad-label-3">predators</div>
          <div className="Doodad-label Doodad-label-4">reproduction</div>
          <div className="Doodad-label Doodad-label-5">respiration</div>
          <div className="row" style={{width: size/2, marginBottom: -(size/10)}}>
            <img src={DoodadImage} alt=""/>
          </div>
          <div className="row" style={{width: size*1.15}}>
            {/* <div className="Doodad-label Doodad-label-2">Foobar</div> */}
            <img src={DoodadImage} alt=""/>
            <img src={DoodadImage} alt=""/>
            {/* <div className="Doodad-label Doodad-label-3">Foobar</div> */}
          </div>
          <div className="row" style={{width: size*0.8}}>
            {/* <div className="Doodad-label Doodad-label-4 ">Foobar</div> */}
            <img src={DoodadImage} alt=""/>
            <img src={DoodadImage} alt=""/>
            {/* <div className="Doodad-label Doodad-label-5">Foobar</div> */}
          </div>
        </div>​
      </div>
    )
  }

}

class SpeciesMetric extends Component {

  render() {
    const {label, icon} = this.props
    return (
      <div className="SpeciesMetric">
        <div className="SpeciesMetric-header">
          <div className="SpeciesMetric-header-icon">
            <img src={icon} alt={label}/>
          </div>
          <div className="SpeciesMetric-header-label">{label}</div>
        </div>
        <div className="SpeciesMetric-contents">
          <CircleThing/>
          <SparkCombo/>
        </div>
      </div>
    )
  }

}

export default SpeciesMetric
