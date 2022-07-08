import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import * as aboutUsStyle from "../styles/aboutus.module.css";
import Intro from "./shared/Intro";
import CountUp from "react-countup";

export default function AboutUs() {
  const aboutData = useStaticQuery(graphql`
    query aboutUsHome {
      allContentfulAboutUsHome {
        nodes {
          botImage {
            url
          }
          clients
          icon {
            gatsbyImageData(layout: CONSTRAINED)
          }
          iconDesc
          list
          title
          topImage {
            url
          }
        }
      }
    }
  `);

  let about = aboutData.allContentfulAboutUsHome.nodes[0];
  return (
    <div className={aboutUsStyle.aboutUs_section_container}>
      <div className={aboutUsStyle.image_container}>
        <div
          className={`${aboutUsStyle.back_image} ${aboutUsStyle.image}`}
        ></div>

        <div
          className={`${aboutUsStyle.top_image} ${aboutUsStyle.image}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${about.topImage.url})`,
          }}
        >
          <div className={aboutUsStyle.clients}>
            <p>
              <CountUp current={0} end={about.clients} enableScrollSpy={true} />
              +
              <br />
              worldwide clients
            </p>
          </div>
        </div>

        <div
          className={`${aboutUsStyle.bot_image} ${aboutUsStyle.image}`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${about.botImage.url})`,
          }}
        ></div>
      </div>
      <div className={aboutUsStyle.aboutUs_container}>
        <Intro header={about.title} list={about.list} />

        <div className={aboutUsStyle.tech_problem}>
          <div>
            <GatsbyImage image={about.icon.gatsbyImageData} alt=" " />
          </div>
          <div>{about.iconDesc}</div>
        </div>
        <div className={aboutUsStyle.btn_container}>
          <Link to="/about-us" className="button">
            Discover more
          </Link>
        </div>
      </div>
    </div>
  );
}
