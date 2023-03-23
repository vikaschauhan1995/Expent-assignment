

import React from 'react';

const ProgressBar = ({ percentage, color }) => {
  return (
    <div style={{ backgroundColor: '#003B4D26' }}>
      <div style={{ height: '4px', width: `${percentage}%`, backgroundColor: color }}></div>
    </div>
  )
}

export default ProgressBar
