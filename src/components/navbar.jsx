import React from "react";
import "../css/NavBar.css";

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
  return (
    <header>
      <h2>THE PLANETS</h2>
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
                  onClick={() => props.handleChange(el[0])}
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
  );
};

export default NavBar;
