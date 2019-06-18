import React from 'react';
import './iPhoneX.css';

const IPhoneX = props => (
  <div className="IPhoneX">
    {props.children}
    <div className="IphoneX-bar" />
  </div>
);

export default IPhoneX;
