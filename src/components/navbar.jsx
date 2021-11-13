import React from "react";
import "../css/NavBar.css";
import Menu from "../images/icon-hamburger.svg";
import Chevron from "../images/icon-chevron.svg";

const NavBar = (props) => {
  let planets = [
    [0, "MERCURY", "#419ebb"],
    [1, "VENUS", "#eda249"],
    [2, "EARTH", "#6f2ed6"],
    [3, "MARS", "#d14c32"],
    [4, "JUPITER", "#d83a34"],
    [5, "SATURN", "#cd5120"],
    [6, "URANUS", "#1ec2a4"],
    [7, "NEPTUNE", "#2d68f0"],
  ];
  let heightVal = props.hideVal ? "0px" : "calc(100% - 72px)";
  return (
    <>
      <header>
        <h2>THE PLANETS</h2>
        <img
          src={Menu}
          alt="hamburger-menu"
          onClick={props.handleHide}
          className="hamburger-menu"
        />
        <nav>
          <ul>
            {planets.map((el) => {
              return (
                <div
                  className={props.info.id === el[0] + 1 ? "active" : ""}
                  style={{ borderTopColor: el[2] }}
                  key={el[0]}
                >
                  <li
                    style={Object.assign(
                      props.info.id === el[0] + 1
                        ? { borderTop: `3px solid ${el[2]}` }
                        : { borderTop: "" }
                    )}
                    onClick={() => props.handleChange(el[0], false)}
                    key={el[0]}
                  >
                    {el[1]}
                  </li>
                </div>
              );
            })}
          </ul>
        </nav>
      </header>
      <div className="mobile-planet-list" style={{ height: heightVal }}>
        <ul>
          {planets.map((el) => {
            return (
              <div
                className={
                  props.info.id === el[0] + 1
                    ? "planet-item active"
                    : "planet-item"
                }
                style={{ borderTopColor: el[2] }}
                key={el[0]}
                onClick={() => props.handleChange(el[0], true)}
              >
                <div>
                  <div
                    className="bullet"
                    style={{ backgroundColor: el[2] }}
                  ></div>
                  <li>{el[1]}</li>
                </div>
                <img src={Chevron} alt="chevron" />
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
