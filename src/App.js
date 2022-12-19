//npm start

import React from 'react';
// import ParticleField from 'react-particles-webgl';
import Particles from 'react-particles-js';
import './App.css';

function handleRefresh() {
  window.location.reload();
}

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
  window.open("https://publications.recursion.is/", '_blank');
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

function handlePaypal() {
  window.open("https://paypal.me/RecursionIs", '_blank');
}

function handlePatreon() {
  window.open("https://www.patreon.com/RecursionIs", '_blank');
}


function Quote() {
  var quotes = [
    'Connecting your thoughts, so you don\'t have to ',
    'Unbounded thinking',
    'Thinking about thinking - a meta-analysis',
    'Fixing broken things, breaking working things',
    'The Y combinator of thought',
    'Applied philosophy',
    'Applied repetition',
    'Recognizing your potential by taking transparency to the extreme',
    'True and False',
    'Neither True nor False',
    'Connections, but with perspective',
    'Only look at the light when you are ready',
    'Challenging paradoxes',
    'The self-application of self-application',
    'Towards a theory of gravity at all scales',
    'The clock is ticking',
    'From the perspective of zero, everything is infinity',
    'From the perspective of infinity, everything is zero',
    '"I would rather regret something I did, than something I didn\'t."',
    '"Steal from the best, invent the rest." - Micheal Corsetto',
    '"You will never get younger than now."',
    '"There are no differences but differences of degree between different degrees of difference and no difference." - William James',
    '“Time is the most valuable thing a person can spend.” - Theophrastus',
    '“Sooner or later, everything old is new again.” - Steven King',
    '"That which can be destroyed by the truth should be." - Patricia Christine Hodgell',
    '"Life itself is an exercise in exceptions." - Jean-Luc Picard',
    '"This independence created by philosophical insight is - in my opinion - the mark of distinction between a mere artisan or specialist and a real seeker after truth." - Albert Einstein',
    '"It is okay to make mistakes as long as things are happening."',
    '"The inventors of the alphabet were unable to read until after they created letters." - u/SirHerald',
    '"Because Nothing was, therefore All Things are." - Edgar Allen Poe',
    '"Space and duration are one." - Edgar Allen Poe',
    '"Rhythmic Balanced Interchange" - Walter Russell',
    '"We can\'t talk about how reality functions without sounding crazy." - Jack Krause',
    '"We can\'t just focus on one field of science, we must focus on all of them." - Nick Maleki',
    '"Both infinity and zero are infinitely certain." - Nick Maleki',
    '"A transparent vessel, like the glass cup, is inevitable." - Nick Maleki',
    '"I want to see the universe smile" - Nick Maleki',
    '"You don\'t know where you are without relativity." - Amir Maleki',
    'Introducing infinity from a finite perspective',
    'Someone\'s entire life: memories, worries, hopes, dreams, fears, and decisions are all contained within the brain.',
    'Almost all of your neurons form before your birth and may survive after your death. Treat them well.',
    '"Our unalterable resolution should be to be free." - Samuel Adams'
  ];

  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  console.log(quote)
  return (<div id="quote" onClick={handleRefresh}>{quote}</div>);
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
  // useEffect(() => {
  // }, []);
  // window.addEventListener('resize', changeParticleNum)
  // document.getElementById('logo').addEventListener('click', function (event) {
  //           handleNotes()
  //       });
  return (
    <div className="App">
      {/* <div id="particles" style={{ height: "100vh", width: "100%" }}>
      <ParticleField config={config} />;
      </div> */}

      <div id="particles" onClick={handleNotes}>
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
        <h1>
            <img id="logo" src="Recursion Logo Full White Glow.svg" alt="Recursion"/>
        </h1>
        <br></br>
        <Quote />
        <br></br>
        <br></br>
        <br></br>
        <nav>
          <ul>
            <li><img className="icon" src="LinkedIn.svg" alt="LinkedIn" onClick={handleLinkedin} /></li>
            <li><img className="icon" src="GitHub.svg" alt="GitHub" onClick={handleGithub} /></li>
            <li><img className="icon" src="Mail.svg" alt="Email" onClick={handleMail} /></li>
            <li><img className="icon" src="Twitter.svg" alt="Twitter" onClick={handleTwitter} /></li>
            <li><img className="iconorange" src="YouTube.svg" alt="YouTube" onClick={handleYouTube} /></li>
            <li><img className="icon" src="Publications.svg" alt="Publications" onClick={handlePublications} /></li>
            <li><img className="iconorange" src="Notes.svg" alt="Notes" onClick={handleNotes} /></li>
            <li><img className="icon" src="Discord.svg" alt="Discord" onClick={handleDiscord} /></li>
            <li><img className="icon" src="Paypal.svg" alt="Discord" onClick={handlePaypal} /></li>
            <li><img className="icon" src="Patreon.svg" alt="Discord" onClick={handlePatreon} /></li>
            <li><img className="icon" src="Nick.svg" alt="Nick" onClick={handleNick} /></li>
          </ul>
          {/* <ul>
            <li><a href="https://www.linkedin.com/company/recursion-computing"><img className="icon" src="LinkedIn.svg" alt="LinkedIn" onClick={handleLinkedin} /></a></li>
            <li><a href="https://github.com/recursion-computing"><img className="icon" src="GitHub.svg" alt="GitHub" onClick={handleGithub} /></a></li>
            <li><a href="mailto:info@recursion.is"><img className="icon" src="Mail.svg" alt="Email" onClick={handleMail} /></a></li>
            <li><a href="https://twitter.com/RecursionIs"><img className="icon" src="Twitter.svg" alt="Twitter" onClick={handleTwitter} /></a></li>
            <li><a href="https://recursion.is/youtube"><img className="iconorange" src="YouTube.svg" alt="YouTube" onClick={handleYouTube} /></a></li>
            <li><a href="https://publications.recursion.is"><img className="icon" src="Publications.svg" alt="Publications" onClick={handlePublications} /></a></li>
            <li><a href="https://notes.recursion.is"><img className="icon" src="Notes.svg" alt="Notes" onClick={handleNotes} /></a></li>
            <li><a href="https://discord.gg/2kSSsvTVc3"><img className="icon" src="Discord.svg" alt="Discord" onClick={handleDiscord} /></a></li>
            <li><a href="https://nickmaleki.com"><img className="icon" src="Nick.svg" alt="Nick" onClick={handleNick} /></a></li>
          </ul> */}
        </nav>
        
      </div>
    </div>
  );
}

export default App;
// export default () => <ParticleField config={config} />;
