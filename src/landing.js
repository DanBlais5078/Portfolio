import React, { useEffect } from 'react';
import anime from "animejs";
import './css/landing.css'

const GRID_WIDTH = 25;
const GRID_HEIGHT = 27;

function LandingPage() {
  useEffect(() => {
    anime({
      targets: ['.home-container', '.home-button-container'],
      translateY: '0%',
      duration: 1000,            
      easing: 'easeOutExpo',
    });
    
    anime({
      targets: '.background-grid-container',
      translateX: '0%',
      duration: 1000,            
      easing: 'easeOutExpo',
    });
  }, []);
  return (
    <div>
      <div id="home" className="home-container">
        <h1 className="greeting">{greeting()}</h1>
        <h1 className="name">Dan Blais.</h1>
        <h1 className="career">Full-Stack Web Developer</h1>
        <p className="quick-about"> 
          I&apos;m a <span className="highlight">full-stack web developer</span> with a passion for creating 
          <span className="highlight"> visually stunning</span> and <span className="highlight"> user-friendly</span> 
          <span className="highlight"> websites</span> and <span className="highlight">web applications</span>. I am 
          experienced in both <span className="highlight"> back-end</span> and <span className="highlight"> front-end </span>
          web development, and am focused on creating high-quality web-based solutions for 
          <span className="highlight"> businesses</span> and <span className="highlight"> individuals</span>.
        </p>
      </div>
      <div className="home-button-container">
        <input type="button" className="home-button" value="Contact Me" onClick={() => {window.location.href = "https://www.linkedin.com/in/dan-blais-2127042b3"}}></input>
        <input type="button" className="home-button" value="See My Work"></input>
      </div>
      <BackgroundGridContainer />
    </div>
  )
}

function greeting() {
    const date = new Date();
    const hours = date.getHours();
    let greeting = "";
  
    if (hours < 12) {
      greeting = 'Good Morning';
    } else if (hours >= 12 && hours < 17) {
      greeting = 'Good Afternoon';
    } else {
      greeting = 'Good Evening';
    }
  
    return greeting + ", I'm";
  }
  
  function BackgroundGridContainer() {
      return (
        <div className="background-grid-container">
          <BackgroundGrid />
        </div>
      )
  }
  
  function BackgroundGrid() {
    const dots = [];
    let index = 0;
  
    const dotClicked = (dot) => {
      anime({
        targets: ".dot-point",
        scale: [
          {value: 1.35, easing: "easeInOutSine", duration: 250},
          {value: 1, easing: "easeInOutQuad", duration: 500}
        ],
        translateY: [
          {value: -15, easing: "easeInOutSine", duration: 250},
          {value: 0, easing: "easeInOutQuad", duration: 500}
        ],
        opacity: [
          {value: 1, easing: "easeInOutSine", duration: 250},
          {value: 0.25, easing: "easeInOutQuad", duration: 500}
        ],
        delay: anime.stagger(100, {
          grid: [GRID_WIDTH, GRID_HEIGHT],
          from: dot.target.dataset.index,
        }),
      })
    };
  
    for (let i = 0; i < GRID_WIDTH; i++) {
      for (let j = 0; j < GRID_HEIGHT; j++) {
        dots.push(
        <div 
          onClick={dotClicked}
          className="background-dot"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div 
            className="dot-point"
            data-index={index}
          >
          </div>
        </div>
        );
        index++;
      }
    }
      return (
        <div
          style={{gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
          className="background-grid"
        >
          {dots}
        </div>
      )
  }

export default LandingPage;
  