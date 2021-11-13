import React from "react";

const Footer = (props) => {
  const planetProperties = [
    ["rotation time", ""],
    ["revolution time", ""],
    ["radius", " KM"],
    ["average temp.", "\u00B0C"],
  ];
  let displayVal = props.hideVal ? "block" : "none";

  return (
    <>
      <footer className="web-tab-footer">
        {planetProperties.map((property) => {
          let ind = planetProperties.indexOf(property);
          return (
            <div>
              <p>{property[0]}</p>
              <h2>
                {props.info.properties[ind].toLocaleString("en-US") +
                  planetProperties[ind][1].toString()}
              </h2>
            </div>
          );
        })}
      </footer>
      <footer className="mobile-footer" style={{ display: displayVal }}>
        {planetProperties.map((property) => {
          let ind = planetProperties.indexOf(property);
          return (
            <div>
              <p>{property[0]}</p>
              <h2>
                {props.info.properties[ind].toLocaleString("en-US") +
                  planetProperties[ind][1].toString()}
              </h2>
            </div>
          );
        })}
      </footer>
    </>
  );
};

export default Footer;
