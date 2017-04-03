import React, { Component } from 'react';
import './Dashboard.css';

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
        </div>
      </div>
    );
  }
}

export default Dashboard;
