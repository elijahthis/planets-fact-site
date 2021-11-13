import React, { Component } from "react";
import "../css/crux.css";

function Phases(props) {
  const topics = [
    ["overview", "overview"],
    ["internal structure", "structure"],
    ["surface geology", "geology"],
  ];

  return (
    <>
      <div className="web-tab-links">
        {topics.map((topic) => {
          let ind = topics.indexOf(topic);
          return (
            <p
              className={
                "desc-link" + (props.phaseNum === ind ? " active" : "")
              }
              onClick={() => {
                props.handleChange(ind);
              }}
              style={
                props.phaseNum === ind
                  ? { backgroundColor: props.planetInfo.color, border: "none" }
                  : {}
              }
            >
              <span>{`0${ind + 1}`}</span>
              <span>{topic[0]}</span>
            </p>
          );
        })}
      </div>

      <div className="mobile-links">
        {topics.map((topic) => {
          let ind = topics.indexOf(topic);
          return (
            <p
              className={
                "desc-link" + (props.phaseNum === ind ? " active" : "")
              }
              onClick={() => {
                props.handleChange(ind);
              }}
              style={
                props.phaseNum === ind
                  ? {
                      borderBottom: "4px solid" + props.planetInfo.color,
                    }
                  : { borderColor: props.planetInfo.color }
              }
            >
              <span>{topic[1]}</span>
            </p>
          );
        })}
      </div>
    </>
  );
}

export default Phases;
