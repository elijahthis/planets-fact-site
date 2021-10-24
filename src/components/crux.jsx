import React, { Component, useState } from "react";
import Phases from "./phases";
import "../css/crux.css";
import iconSource from "../images/icon-source.svg";

import MercuryMain from "../images/planet-mercury.svg";
import VenusMain from "../images/planet-venus.svg";
import EarthMain from "../images/planet-earth.svg";
import MarsMain from "../images/planet-mars.svg";
import JupiterMain from "../images/planet-jupiter.svg";
import SaturnMain from "../images/planet-saturn.svg";
import UranusMain from "../images/planet-uranus.svg";
import NeptuneMain from "../images/planet-neptune.svg";

import MercuryInternal from "../images/planet-mercury-internal.svg";
import VenusInternal from "../images/planet-venus-internal.svg";
import EarthInternal from "../images/planet-earth-internal.svg";
import MarsInternal from "../images/planet-mars-internal.svg";
import JupiterInternal from "../images/planet-jupiter-internal.svg";
import SaturnInternal from "../images/planet-saturn-internal.svg";
import UranusInternal from "../images/planet-uranus-internal.svg";
import NeptuneInternal from "../images/planet-neptune-internal.svg";

import MercuryGeology from "../images/geology-mercury.png";
import VenusGeology from "../images/geology-venus.png";
import EarthGeology from "../images/geology-earth.png";
import MarsGeology from "../images/geology-mars.png";
import JupiterGeology from "../images/geology-jupiter.png";
import SaturnGeology from "../images/geology-saturn.png";
import UranusGeology from "../images/geology-uranus.png";
import NeptuneGeology from "../images/geology-neptune.png";

const images = {
  main: [
    MercuryMain,
    VenusMain,
    EarthMain,
    MarsMain,
    JupiterMain,
    SaturnMain,
    UranusMain,
    NeptuneMain,
  ],
  internal: [
    MercuryInternal,
    VenusInternal,
    EarthInternal,
    MarsInternal,
    JupiterInternal,
    SaturnInternal,
    UranusInternal,
    NeptuneInternal,
  ],
  geology: [
    MercuryGeology,
    VenusGeology,
    EarthGeology,
    MarsGeology,
    JupiterGeology,
    SaturnGeology,
    UranusGeology,
    NeptuneGeology,
  ],
};

const el = document.getElementsByClassName("small-wrapper");
console.log(el[0]);

class Crux extends Component {
  render() {
    return (
      <main>
        <div className="main-img-wrapper">
          <div className="small-wrapper">
            <img
              src={
                this.props.phase === 1
                  ? images.internal[this.props.info.id - 1]
                  : images.main[this.props.info.id - 1]
              }
            />

            {this.props.phase === 2 ? (
              <div className="div-internal">
                <img
                  src={images.geology[this.props.info.id - 1]}
                  className="img-internal"
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <section className="main-section">
          <h1>{this.props.info.pName}</h1>
          <p>{this.props.info.desc[this.props.phase]}</p>
          <p className="source">
            Source:
            {/* <Link href="http://localhost:3000/">
            Wikipedia <img src={iconSource} />
          </Link> */}
          </p>
          <Phases
            handleChange={this.props.handleChange}
            phaseNum={this.props.phase}
            planetInfo={this.props.info}
          />
        </section>
      </main>
    );
  }
}

export default Crux;
