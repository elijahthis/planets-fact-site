import React, { Component } from "react";
import "../css/crux.css";

function Phases(props) {
  const topics = ["overview", "internal structure", "surface geology"];

  return (
    <div className="links">
      {topics.map((topic) => {
        let ind = topics.indexOf(topic);
        return (
          <p
            className={"desc-link" + (props.phaseNum === ind ? " active" : "")}
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
            <span>{topic}</span>
          </p>
        );
      })}
    </div>
  );
}

export default Phases;
