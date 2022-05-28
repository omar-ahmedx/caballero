import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Header from "./shared/Header";
import * as offersStyle from "../styles/offers.module.css";
export default function Offers() {
  const data = useStaticQuery(graphql`
    query Icons {
      allFile(filter: { relativeDirectory: { eq: "offers" } }) {
        nodes {
          publicURL
        }
      }
    }
  `);
  const icons = data.allFile.nodes;

  const titles = [
    "Product Development",
    "UI/UX DEsigning",
    "Graphic Design",
    "Content Management",
    "Data Analysis",
  ];
  const desc = [
    "Lorem ipsum dolor dit amelm,. conssetoture ja dme nbels",
    "Lorem ipsum dolor dit amelm,. conssetoture ja dme nbels",
    "Lorem ipsum dolor dit amelm,. conssetoture ja dme nbels",
    "Lorem ipsum dolor dit amelm,. conssetoture ja dme nbels",
    "Lorem ipsum dolor dit amelm,. conssetoture ja dme nbels",
  ];
  return (
    <div className={`${offersStyle.container} container`}>
      <div>
        <Header header={"what we're offering"} />
      </div>
      <p className={offersStyle.title}>
        Services we're providing <br />
        to our customers
      </p>
      <div className={offersStyle.offers_container}>
        {titles.map((title, index) => (
          <div key={index} className={offersStyle.offers_wrapper}>
            <div
              className={offersStyle.offers_icons}
              style={{
                backgroundImage: `url(${icons[index].publicURL})`,
                width: "80px",
                height: "80px",
              }}
            ></div>
            <p>{title}</p>
            <p>{desc[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
