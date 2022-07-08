import React from "react";
import Header from "./Header";
import * as introStyle from "../../styles/intro.module.css";
export default function Intro({ header, list }) {
  return (
    <div>
      <Header header="About Us" />

      <p className={introStyle.title}>{header}</p>
      <ul>
        {list.map((li, index) => (
          <li key={index}>{li}</li>
        ))}
      </ul>
    </div>
  );
}
