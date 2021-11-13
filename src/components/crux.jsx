import React, { useEffect } from "react";
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

const Crux = (props) => {
  let marginVal = props.hideVal ? "72px" : "667px";
  let displayVal = props.hideVal ? "block" : "none";
  let heightVal = props.hideVal ? "auto" : "0px";
  return (
    <>
      <main className="web-tab-main">
        <div className="main-img-wrapper">
          <div className="small-wrapper">
            <img
              src={
                props.phase === 1
                  ? images.internal[props.info.id - 1]
                  : images.main[props.info.id - 1]
              }
            />

            {props.phase === 2 ? (
              <div className="div-internal">
                <img
                  src={images.geology[props.info.id - 1]}
                  className="img-internal"
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <section className="main-section">
          <div className="main-txt">
            <h1>{props.info.pName}</h1>
            <p>{props.info.desc[props.phase]}</p>
            <p className="source">
              Source:{" "}
              <a href={props.info.resource} target="_blank">
                Wikipedia <img src={iconSource} />
              </a>
            </p>
          </div>
          <Phases
            handleChange={props.handleChange}
            phaseNum={props.phase}
            planetInfo={props.info}
          />
        </section>
      </main>

      <main
        style={{ marginTop: marginVal, height: heightVal }}
        className="mobile-main"
      >
        <Phases
          handleChange={props.handleChange}
          phaseNum={props.phase}
          planetInfo={props.info}
        />
        <div className="main-img-wrapper">
          <div className="small-wrapper">
            <img
              src={
                props.phase === 1
                  ? images.internal[props.info.id - 1]
                  : images.main[props.info.id - 1]
              }
            />

            {props.phase === 2 ? (
              <div className="div-internal">
                <img
                  src={images.geology[props.info.id - 1]}
                  className="img-internal"
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <section className="main-section">
          <div className="main-txt">
            <h1>{props.info.pName}</h1>
            <p>{props.info.desc[props.phase]}</p>
            <p className="source">
              Source:{" "}
              <a href={props.info.resource} target="_blank">
                Wikipedia <img src={iconSource} />
              </a>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Crux;
