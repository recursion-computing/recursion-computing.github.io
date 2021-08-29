import React from 'react';
import ParticleField from 'react-particles-webgl';
import './App.css';

function handleLinkedin() {
  window.open("https://www.linkedin.com/company/recursion-inc", '_blank');
}

function handleGithub() {
  window.open("https://github.com/recursion-computing", '_blank');
}

function handleMail() {
  window.open("mailto:recursion.computing@gmail.com", '_blank');
}

function handleTwitter() {
  window.open("https://twitter.com/RecursionInc", '_blank');
}

function handleYouTube() {
  window.open("https://www.youtube.com/channel/UCuHB_2AOt8vjuvZZp6tSoxg", '_blank');
}

var config = {
  showCube: false,
  dimension: '3D',
  velocity: 0.5,
  boundaryType: 'passthru',
  antialias: false,
  direction: {
    xMin: -1,
    xMax: 1,
    yMin: -1,
    yMax: 1,
    zMin: -1,
    zMax: 1
  },
  lines: {
    colorMode: 'solid',
    color: '#ffffff',
    transparency: 0.9,
    limitConnections: true,
    maxConnections: 20,
    minDistance: 300,
    visible: true
  },
  particles: {
    colorMode: 'solid',
    color: '#ed7e48',
    transparency: 0.9,
    shape: 'circle',
    boundingBox: 'canvas',
    count: 180,
    minSize: 10,
    maxSize: 45,
    visible: true
  },
  cameraControls: {
    enabled: true,
    enableDamping: true,
    dampingFactor: 0.2,
    enableZoom: true,
    autoRotate: true,
    autoRotateSpeed: 0.3,
    resetCameraFlag: false
  }
};

function changeParticleNum(){
  var w = window.innerWidth;
  var h = window.innerHeight;
  //console.log(w,h)
  //7372800
  //2073600
  //204800
  //250
  //180
  //90
  if (w*h > 100000){
    console.log("hello")
    config.particles.count = -450+44*Math.log(w*h)
  } else {
    config.particles.count = 30
  }
}
changeParticleNum();

function App() {
  window.addEventListener('resize', changeParticleNum)
  return (
    <div className="App">
      <div id="particles" style={{ height: "100vh", width: "100%" }}>
      <ParticleField config={config} />;
      </div>

      <div className="mainflex">
        {/* <h1 className="centered" style={{ top: '-60px', color: '#ffffff'}}>Recursion</h1> */}
        <img className="centered" src="Recursion Logo Full White.svg"/>
        
        <ul id="nav-links">
          <li>
            <img src="LinkedIn.svg" width="40px" onClick={handleLinkedin} />
          </li>
          <li>
            <img src="GitHub.svg" width="40px" onClick={handleGithub} />
          </li>
          <li>
            <img src="Mail.svg" width="40px" onClick={handleMail} />
          </li>
          <li>
            <img src="Twitter.svg" width="40px" onClick={handleTwitter} />
          </li>
          <li>
            <img src="YouTube.svg" width="40px" onClick={handleYouTube} />
          </li>
        </ul>
        
      </div>

      
    </div>
  );
}

export default App;
// export default () => <ParticleField config={config} />;
