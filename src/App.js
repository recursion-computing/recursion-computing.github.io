import React from 'react';
// import ParticleField from 'react-particles-webgl';
import Particles from 'react-particles-js';
import './App.css';

function handleLinkedin() {
  window.open("https://www.linkedin.com/company/recursion-computing", '_blank');
}

function handleGithub() {
  window.open("https://github.com/recursion-computing", '_blank');
}

function handleMail() {
  window.open("mailto:info@recursion.is", '_blank');
}

function handleTwitter() {
  window.open("https://twitter.com/RecursionIs", '_blank');
}

function handleYouTube() {
  window.open("https://recursion.is/youtube", '_blank');
}

function handlePublications() {
  window.open("https://scholar.recursion.is/", '_blank');
}

function handleNotes() {
  window.open("https://notes.recursion.is/", '_blank');
}

function handleDiscord() {
  window.open("https://discord.gg/2kSSsvTVc3", '_blank');
}
function handleNick() {
  window.open("https://nickmaleki.com", '_blank');
}

// var config = {
//   showCube: false,
//   dimension: '3D',
//   velocity: 0.5,
//   boundaryType: 'passthru',
//   antialias: false,
//   direction: {
//     xMin: -1,
//     xMax: 1,
//     yMin: -1,
//     yMax: 1,
//     zMin: -1,
//     zMax: 1
//   },
//   lines: {
//     colorMode: 'solid',
//     color: '#ffffff',
//     transparency: 0.9,
//     limitConnections: true,
//     maxConnections: 20,
//     minDistance: 300,
//     visible: true
//   },
//   particles: {
//     colorMode: 'solid',
//     color: '#ed7e48',
//     transparency: 0.9,
//     shape: 'circle',
//     boundingBox: 'canvas',
//     count: 180,
//     minSize: 10,
//     maxSize: 45,
//     visible: true
//   },
//   cameraControls: {
//     enabled: true,
//     enableDamping: true,
//     dampingFactor: 0.2,
//     enableZoom: true,
//     autoRotate: true,
//     autoRotateSpeed: 0.3,
//     resetCameraFlag: false
//   }
// };

// function changeParticleNum(){
//   var w = window.innerWidth;
//   var h = window.innerHeight;
//   //console.log(w,h)
//   //7372800
//   //2073600
//   //204800
//   //250
//   //180
//   //90
//   if (w*h > 100000){
//     console.log("hello")
//     config.particles.count = -450+44*Math.log(w*h)
//   } else {
//     config.particles.count = 30
//   }
// }
// changeParticleNum();

function App() {
  // window.addEventListener('resize', changeParticleNum)
  return (
    <div className="App">
      {/* <div id="particles" style={{ height: "100vh", width: "100%" }}>
      <ParticleField config={config} />;
      </div> */}
      <div id = "particles">
        <Particles
          params={{
            particles: {
              opacity: 1,
              color: "#ed7e48",
              number: {
                value: 180
              },
              size: {
                value: 5,
		            random: true
              },
              line_linked: {
                distance: 200,
              },
              move: {
                speed: 1
              },
            },
            background: {
              image: "linear-gradient(135deg, #093f79 -100%, #093f79 50%)"
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse"
                }
              }
            }
          }}
        >
        </Particles>
      </div>

      <div className="centerdock">
        <img id="logo" width='320px' src="Recursion Logo Full White.svg"/>
        <br></br>
        <div id="buttons">
            <img className="icon" src="LinkedIn.svg" width="40px" onClick={handleLinkedin} />
            <img className="icon" src="GitHub.svg" width="40px" onClick={handleGithub} />
            <img className="icon" src="Mail.svg" width="40px" onClick={handleMail} />
            <img className="icon" src="Twitter.svg" width="40px" onClick={handleTwitter} />
            <img className="icon" src="YouTube.svg" width="40px" onClick={handleYouTube} />
            <img className="icon" src="Publications.svg" width="40px" onClick={handlePublications} />
            <img className="icon" src="Notes.svg" width="40px" onClick={handleNotes} />
            <img className="icon" src="Discord.svg" width="40px" onClick={handleDiscord} />
            <img className="icon" src="Nick.svg" width="40px" onClick={handleNick} />
        </div>
      </div>

      {/* <div className="mainflex">
        <img className="centered" style={{ top: '-36px', width: '320px'}} src="Recursion Logo Full White.svg"/> 
        <ul id="nav-links">
          <li>
            <img className="icon" src="LinkedIn.svg" width="40px" onClick={handleLinkedin} />
          </li>
          <li>
            <img className="icon" src="GitHub.svg" width="40px" onClick={handleGithub} />
          </li>	
          <li>
            <img className="icon" src="Mail.svg" width="40px" onClick={handleMail} />
          </li>
          <li>
            <img className="icon" src="Twitter.svg" width="40px" onClick={handleTwitter} />
          </li>
          <p><br></br></p>
          <li>
            <img className="icon" src="YouTube.svg" width="40px" onClick={handleYouTube} />
          </li>
          <li>
            <img className="icon" src="Publications.svg" width="40px" onClick={handlePublications} />
          </li>
          <li>
            <img className="icon" src="Obsidian.svg" width="40px" onClick={handleNotes} />
          </li>
        </ul>
      </div>  */}

    </div>
  );
}

export default App;
// export default () => <ParticleField config={config} />;
