import React from 'react';
import "./whatGPT3.css";
import { Feature } from '../../components';

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient-text'></h1>
        <p>Explre The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default WhatGPT3