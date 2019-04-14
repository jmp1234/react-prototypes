import React from 'react';
import './scrapbook.css';
import puppy from './images/puppy1.jpg';

export default props => {
  return (
    <div className="scrapbook-container">
      <img src={props}/>
    </div>
  )
}
