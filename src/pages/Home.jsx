import React from "react";
//import { Link } from "react-router-dom";
//import image from "../img/flash-bg.jpg";
import Particles from "react-particles-js";
//import {Transition} from 'react-spring/renderprops'
//import * as ReactBootstrap from "react-bootstrap";
import Typed from "react-typed";

import "./home.style.css";
function Home() {
  return (
    <div className="homeContainer">
      <div className="head-div">
        <strong>
          <p className="Hello">
            <Typed strings={["Parag Dangariya"]} typeSpeed={50} />
          </p>
        </strong>
        <p className="normal-p">
          <Typed
            strings={[
              "React Developer",
              "Web Developer",
              "Java / Android Developer",
            ]}
            typeSpeed={80}
            backSpeed={50}
            loop
          />
        </p>
      </div>
      <Particles
        id="simple"
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      ></Particles>
    </div>
  );
}

export default Home;
