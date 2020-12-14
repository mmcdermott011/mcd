import React, { Component } from "react";
import { motion } from "framer-motion";
import { render }  from "react-dom";
import Particles from "react-tsparticles";

export default class App extends Component {
    constructor(props) {
        super(props);

    }
    render() {
// play will start the animations, if the move is not enabled it won't enable it, it just updates the frame
      return (
          <div >
          <Particles id="tsparticles"
        options={{
          backgroundMode: {enable: false,
          zIndex: -1},
  detectRetina: false,
  fpsLimit: 60,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "bubble"
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 40,
        duration: 2,
        opacity: 8,
        size: 6,
        speed: 3
      }
    }
  },
  particles: {
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 20,
        sync: true
      }
    },
    lineLinked: {
      blink: false,
      color: { value: "#ff0000"},
      consent: false,
      distance: 60,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200
        }
      },
      bounce: false,
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 200
      },
      limit: 100,
      value: 75
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.05,
        speed: 2,
        sync: false
      },
      random: false,
      value: 1
    },
    shape: {
      type: "circle"
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 40,
        sync: false
      },
      random: true,
      value: 2
    }
  },
  polygon: {
    draw: {
      enable: true,
      lineColor: "rgba(255,255,255,0.2)",
      lineWidth: 1
    },
    move: {
      radius: 10
    },
    inlineArrangement: "equidistant",
    scale:2,
    type: "inline",
    // url: "../../static/mysite/images/human-skull.svg"
  }
}}
      ></Particles>
          </div>

           );
    }
}



const appDiv = document.getElementById("app");
render(<App />, appDiv);
