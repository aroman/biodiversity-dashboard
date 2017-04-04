import React, { Component } from 'react'
import * as SL from 'react-sparklines'
import { boxMullerRandom, randomData } from './DataUtils.js'
import * as Constants from './Constants.js'
import SparkCombo from './SparkCombo.js'
import DoodadImage from './icons/doodad.png'

import './SpeciesMetric.css'
import './Doodad.css'

class CircleThing extends Component {

  render() {
    const size = 175
    return (
      <div className="Doodad">
        <div className="container">
          <div className="row" style={{width: size/2, marginBottom: -(size/10)}}>
            <img src={DoodadImage} alt=""/>
          </div>
          <div className="row" style={{width: size*1.15}}>
            <img src={DoodadImage} alt=""/>
            <img src={DoodadImage} alt=""/>
          </div>
          <div className="row" style={{width: size*0.8}}>
            <img src={DoodadImage} alt=""/>
            <img src={DoodadImage} alt=""/>
          </div>
        </div>​
      </div>
    )
  }

}

class SpeciesMetric extends Component {

  constructor(props) {
      super(props);
      this.state = { data: randomData(20) };
      setInterval(() =>
        this.setState({
            data: this.state.data.concat([boxMullerRandom()])
        }), Constants.INTERVAL);
  }

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

          {/* <div style={{width: 200}}>
            <SL.Sparklines data={this.state.data} limit={20}>
                <SL.SparklinesLine />
                <SL.SparklinesSpots />
            </SL.Sparklines>
          </div>
          <div style={{width: 100}}>
            <SL.Sparklines data={this.state.data} limit={20}>
                <SL.SparklinesLine />
                <SL.SparklinesSpots />
            </SL.Sparklines>
          </div> */}
        </div>
      </div>
    )
  }

}

export default SpeciesMetric
