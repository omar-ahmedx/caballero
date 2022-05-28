import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Header({ header }) {
  const headerStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  };
  const imgStyle = {
    marginRight: "5px",
  };
  return (
    <div style={headerStyle}>
      <span style={imgStyle}>
        <StaticImage src="../../../static/smallBefSec.svg" alt=" " />
      </span>
      <h3>{header}</h3>
    </div>
  );
}
