import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as aboutUsStyle from "../styles/aboutusCom.module.css";
import Intro from "./shared/Intro";

export default function AboutUs() {
  return (
    <div className={aboutUsStyle.aboutUs_section_container}>
      <div className={aboutUsStyle.image_container}>
        <div
          className={`${aboutUsStyle.bot_image} ${aboutUsStyle.image}`}
        ></div>
        <div className={`${aboutUsStyle.mid_image} ${aboutUsStyle.image}`}>
          <div className={aboutUsStyle.clients}>
            <p>
              6860 +
              <br />
              worldwide clients
            </p>
          </div>
        </div>
        <div
          className={`${aboutUsStyle.top_image} ${aboutUsStyle.image}`}
        ></div>
      </div>

      <div className={aboutUsStyle.aboutUs_container}>
        <Intro />

        <div className={aboutUsStyle.tech_problem}>
          <div>
            <StaticImage src="../../static/programmer.svg" alt=" " />
          </div>
          <div>
            Stop worrying, we take care of your <br /> technology problems.
          </div>
        </div>
        <div className={aboutUsStyle.btn_container}>
          <div className="button">Discover more</div>
        </div>
      </div>
    </div>
  );
}
