import React, { Component } from 'react';
import './Education.css';
import scanQR from './scan-qr.png';

class Education extends Component {
  render() {
    return (
        <div class='scanqr'>
            <img src={scanQR} alt='scancode'/>
            <p>0xa0714082bff2DEEa32bD4FFd642d464Daa297232</p>
        </div>
    );
  }
}

export default Education;
