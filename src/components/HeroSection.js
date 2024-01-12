import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted /> 
       <p>What you need, is an Event, to remember for a lifetime</p> 
      <div className='hero-btns'>
         <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LIVE DEMO
        </Button> 
        
      </div>
    </div>
  );
}

export default HeroSection;