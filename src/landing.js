/**
 * LandingPage Component
 * 
 * This component renders the landing page with an interactive 3D background using THREE.js. 
 * It includes a greeting based on the time of day and buttons for navigating to the contact and projects sections.
 * Additionally, it incorporates mouse interaction to control the rotation and movement of a 3D scene.
 * 
 * Dependencies:
 * - React
 * - animejs (for animations)
 * - THREE.js (for rendering 3D scenes)
 * - Star texture image
 * 
 * @returns {JSX.Element} The rendered landing page with interactive 3D background.
 */

import React, { useEffect, useRef, useState } from 'react';
import anime from "animejs";
import './css/landing.css';
import * as THREE from 'three';
import StarTexture from './assets/star.png';

function LandingPage() {
  // Run animation when component is mounted
  useEffect(() => {
    anime({
      targets: ['.home-container', '.home-button-container'],
      translateY: '0%',
      duration: 1000,
      easing: 'easeOutExpo',
    });
  }, []);

  return (
    <div>
      <ThreeRenderer />
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
        <input
          type="button"
          className="home-button"
          value="Contact Me"
          onClick={() => {
            document.getElementById('contact').scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }}
        />
        <input
          type="button"
          className="home-button"
          value="See My Work"
          onClick={() => {
            document.getElementById('projects').scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }}
        />
      </div>
    </div>
  );
}

// Function to return a time-based greeting
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

// 3D Renderer for interactive background
const ThreeRenderer = () => {
  const mountRef = useRef(null);  // Reference to attach the 3D renderer
  const [isMouseActive, setIsMouseActive] = useState(false);  // Track mouse activity (active/inactive)
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  };
  const loader = new THREE.TextureLoader();
  const starsTexture = loader.load(StarTexture);  // Load star texture

  // Set up the 3D scene
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 5);
    camera.position.x = -1.3;
    camera.position.y = 0;
    camera.position.z = 2;
    scene.add(camera);
    const renderer = new THREE.WebGLRenderer();
    
    // Set renderer size and background color
    renderer.setSize(sizes.width, sizes.height);
    renderer.setClearColor(new THREE.Color('#0F172A'), 1);
    mountRef.current.appendChild(renderer.domElement);

    // Material for stars and planet
    const material = new THREE.PointsMaterial({ size: 0.015, opacity: 0.7, map: starsTexture, transparent: true });
    const planetMaterial = new THREE.PointsMaterial({ size: 0.015, color: new THREE.Color(0.2, 0.2, 0.75), opacity: 0.1, transparent: true });

    // Create star geometry and planet sphere geometry
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 5000;
    const posArray = new Float32Array(starsCount * 3);
    const sphereGeometry = new THREE.SphereGeometry(1.25, 80, 80);

    // Randomize star positions
    for (let i = 0; i < starsCount * 3; i++) {
      posArray[i] = ((Math.random() - 0.5) * 9);
    }
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create the 3D objects
    const stars = new THREE.Points(starsGeometry, material);
    const planet = new THREE.Points(sphereGeometry, planetMaterial);
    planet.position.z = -0.55;
    planet.rotation.x = -0.15;
    planet.rotation.y = 0.1;
    planet.rotation.z = -0.5;
    scene.add(stars, planet);

    // Add light to the scene
    const pointLight = new THREE.PointLight(0xffffff, 0.1);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    // Mouse movement tracking
    let mouseX = 0;
    let mouseY = 0;
    let inactivityTimer;
    const mouseTimeout = 1000;  // 1 second of inactivity

    // Function to handle mouse movement and reset inactivity timer
    function animateStars(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;

      clearTimeout(inactivityTimer);
      setIsMouseActive(true);  // Mouse is active

      inactivityTimer = setTimeout(() => {
        setIsMouseActive(false);  // Mouse is inactive
      }, mouseTimeout);
    }

    document.addEventListener('mousemove', animateStars);

    // Define animation speeds for planet rotation and movement
    const rotationSpeed = 0.0005;
    const movementSpeed = 0.0005;
    const mouseFactor = 0.0005;

    // Animation loop for the scene
    const animate = () => {
      requestAnimationFrame(animate);

      // Default spinning behavior when mouse is inactive
      if (!isMouseActive) {
        planet.rotation.y += rotationSpeed;
        stars.rotation.y += rotationSpeed;
      } else {
        // Adjust rotation and movement based on mouse position
        stars.rotation.x = -mouseY * mouseFactor;
        stars.rotation.y = -mouseX * mouseFactor;
        planet.rotation.x = -mouseY * mouseFactor;
        planet.rotation.y = -mouseX * mouseFactor;

        planet.position.x = -mouseX * movementSpeed;
        planet.position.y = -mouseY * movementSpeed;
      }

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resizing to adjust camera and renderer
    window.addEventListener('resize', () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(new THREE.Color('#0F172A'), 1);
    });

    // Clean up on unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [isMouseActive]);

  return <div ref={mountRef} className="three-renderer" />;
};

export default LandingPage;



