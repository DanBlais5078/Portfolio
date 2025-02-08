import React, { useEffect, useRef } from 'react';
import anime from "animejs";
import './css/landing.css'
import * as THREE from 'three';
import StarTexture from './assets/star.png';

function LandingPage() {
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
        <input type="button" className="home-button" value="Contact Me" onClick={() => {window.location.href = "https://www.linkedin.com/in/dan-blais-2127042b3"}}></input>
        <input type="button" className="home-button" value="See My Work"></input>
      </div>
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
  
  const ThreeRenderer = () => {
    const mountRef = useRef(null);
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }
    const loader = new THREE.TextureLoader();
    const starsTexture = loader.load(StarTexture);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 5);
        camera.position.x = -1.3;
        camera.position.y = 0;
        camera.position.z = 2;
        scene.add(camera);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(sizes.width, sizes.height);
        renderer.setClearColor(new THREE.Color('#0F172A'), 1);
        mountRef.current.appendChild(renderer.domElement);

        const material = new THREE.PointsMaterial({ size: 0.015, opacity: 0.7, map: starsTexture, transparent: true});
        const planetMaterial = new THREE.PointsMaterial({ size: 0.015, color: new THREE.Color(0.2, 0.2, 0.75), opacity: 0.1, transparent: true});

        const starsGeometry = new THREE.BufferGeometry();
        const starsCount = 5000;
        const posArray = new Float32Array(starsCount * 3);
        const sphereGeometry = new THREE.SphereGeometry(1.25, 80, 80);

        for (let i = 0; i < starsCount * 3; i++) {
            posArray[i] = ((Math.random() - 0.5) * 9);
        }

        starsGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const stars = new THREE.Points(starsGeometry, material);
        const planet = new THREE.Points(sphereGeometry, planetMaterial);
        planet.position.z = -0.55;
        planet.rotation.x = -0.15
        planet.rotation.y = 0.1;
        planet.rotation.z = -0.5;
        scene.add(stars, planet);

        const pointLight = new THREE.PointLight(0xffffff, 0.1)
        pointLight.position.x = 2
        pointLight.position.y = 3
        pointLight.position.z = 4
        scene.add(pointLight)

        document.addEventListener('mousemove', animateStars);

        let mouseX = 0;
        let mouseY = 0;
        function animateStars(event) {
          mouseX = event.clientX;
          mouseY = event.clientY;
        }

        const clock = new THREE.Clock();

        const animate = () => {
            const elapsedTime = clock.getElapsedTime();

            requestAnimationFrame(animate);
            planet.rotation.y = -0.05 * elapsedTime;
            stars.rotation.y = -0.1 * elapsedTime;

            if(mouseX > 0) {
              stars.rotation.x = -mouseY * (elapsedTime * 0.00005);
              stars.rotation.y = -mouseX * (elapsedTime * 0.00005);
              planet.rotation.x = -mouseY * (elapsedTime * 0.00005);
              planet.rotation.y = -mouseX * (elapsedTime * 0.00005);
              planet.position.x = -mouseX * 0.00009;
              planet.position.y = -mouseY * 0.00009;
            }
            renderer.render(scene, camera);
        };
        animate();

        window.addEventListener('resize', () =>
            {
                sizes.width = window.innerWidth
                sizes.height = window.innerHeight
            
                camera.aspect = sizes.width / sizes.height
                camera.updateProjectionMatrix()
            
                renderer.setSize(sizes.width, sizes.height)
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
                renderer.setClearColor(new THREE.Color('#0F172A'), 1)
            })

        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);
    

    return <div ref={mountRef} className="three-renderer" />;
};

export default LandingPage;
  