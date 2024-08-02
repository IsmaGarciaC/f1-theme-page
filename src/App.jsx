import { useState } from "react";
{/*Impoting Components */}
import Tracks from "./components/Tracks";
import Driver from "./components/Driver";
import Team from "./components/Team";
import Recap from "./components/Recap";
{/*Importing Css Styles */}
import "../src/app.css";
{/*Importing images directly */}
import f1_logo from './assets/f1_logo.svg';
import monaco from './assets/monaco.png';
import silverstone from './assets/silverstone.png';
import spa from './assets/spa.png';
import max from './assets/max.png';
import lando from './assets/lando.png';
import charles from './assets/charles.png';
import ferrari from './assets/ferrari.jpg';
import mercedes from './assets/mercedes.jpeg';
import mclaren from './assets/mclaren.jpg';
import redbull from './assets/redbull.png';

export default App;

function App() {
  return (
    <div className="main-container">
      <div className="header-section">
        {/*Top Header class, the header was created as a component*/}
        <div className='header-top'>
            <img src={f1_logo}alt="logo" />
        </div>
      </div>
      <h2 className="iconic-tracks-h2">Most Iconic F1 Circuits</h2>
      <div className="iconic-tracks">
        {/* The Tracks component shows each track card according to the information of the circuit, name, image, and description*/}
        <Tracks
          name={"MONACO"}
          image={monaco}
          desc={
            "The Monaco Grand Prix is a legendary F1 circuit, known for its narrow streets, tight corners, and stunning Monte Carlo backdrop, challenging driver precision and skill."
          }
        />
        <Tracks
          name={"SILVERSTONE"}
          image={silverstone}
          desc={
            "Silverstone Circuit is a historic F1 track in the UK, known for its high-speed straights and iconic corners, offering a thrilling challenge for drivers."
          }
        />
        <Tracks
          name={"SPA-FRANCORCHAMPS"}
          image={spa}
          desc={
            "Spa-Francorchamps is an iconic F1 circuit in Belgium, famous for its fast corners and the challenging Eau Rouge-Raidillon section, set in the scenic Ardennes Forest."
          }
        />
      </div>
      {/*Iconic Circuits Finished, Start of Drivers and Teams */}
      <div className="container-drivers-teams">
        <div className="drivers">
          <h2>Top 2024 Drivers</h2>
          <Driver
            driver={"Max Verstappen"}
            avatar={max}
            teammember={"Red Bull Racing"}
            stats={"https://www.formula1.com/en/drivers/max-verstappen"}
          />
          <Driver
            driver={"Lando Norris"}
            avatar={lando}
            teammember={"McLaren"}
            stats={"https://www.formula1.com/en/drivers/lando-norris"}
          />
          <Driver
            driver={"Charles Leclerc"}
            avatar={charles}
            teammember={"Ferrari"}
            stats={"https://www.formula1.com/en/drivers/charles-leclerc"}
          />
        </div>
        {/*End Drivers Start Teams */}
        <div className="teams">
          <h2>"The Big 4" Performance in 2024</h2>
          <Team
            teamname={"Ferrari"}
            logo={ferrari}
            score={"345pts"}
            story={"https://www.formula1.com/en/teams/ferrari"}
          />
          <Team
            teamname={"Mercedes"}
            logo={mercedes}
            score={"266pts"}
            story={"https://www.formula1.com/en/teams/mercedes"}
          />
          <Team
            teamname={"McLaren"}
            logo={mclaren}
            score={"366pts"}
            story={"https://www.formula1.com/en/teams/mclaren"}
          />
          <Team
            teamname={"Red Bull"}
            logo={redbull}
            score={"408pts"}
            story={"https://www.formula1.com/en/teams/red-bull-racing"}
          />
        </div>
      </div>
      {/*End of Drivers and Teams, Start of GP Replay */}
      <div className="gp-replay">
          <h3>Did you miss it? Watch the highlights of the last GP for free!</h3>
          <Recap url={'https://www.youtube.com/watch?v=pQaG0ay957M'}/>
      </div>
      <div className="footer">
          <img src={f1_logo} alt="logo" className="final-logo" />
          <div className="footer-text">
        <span>Ismael Garcia | F1 Theme Page Using ReactJS & Vite</span>
          <br />
          <span>MIU University | Web Development Applications | Computer Science</span>
        </div>
      </div>
    </div>
  );
}
