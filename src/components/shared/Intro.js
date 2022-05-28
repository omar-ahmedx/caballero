import React from "react";
import Header from "./Header";
import * as introStyle from "../../styles/intro.module.css";
export default function Intro() {
  return (
    <div>
      <Header header="About Us" />

      <p className={introStyle.title}>
        CABALLERO is an Expert information technology company.
      </p>
      <ul>
        <li>We provide you with website design and programming services</li>
        <li>We provide you with website design and programming services</li>
      </ul>
    </div>
  );
}
