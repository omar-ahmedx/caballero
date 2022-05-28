import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import * as servicesStyle from "../../styles/services.module.css";
import { StaticImage } from "gatsby-plugin-image";

export default function Services() {
  const servicesData = useStaticQuery(graphql`
    query Services {
      allMdx {
        nodes {
          frontmatter {
            title
            icon {
              publicURL
            }
            desc
            background {
              publicURL
            }
          }
        }
      }
    }
  `);
  const services = servicesData.allMdx.nodes;

  return (
    <div className={servicesStyle.container}>
      {services.map((service, index) => (
        <div
          key={index}
          className={servicesStyle.service_container}
          style={{
            backgroundImage: `linear-gradient( 180deg, rgba(156,156,156,0.42941), rgba(0,0,0,0.6588235) ), url(${service.frontmatter.background.publicURL})`,
          }}
        >
          <div className={servicesStyle.service_title}>
            {service.frontmatter.title}
          </div>

          <div className={servicesStyle.service_details_container}>
            <div className={servicesStyle.service_details_wrapper}>
              <div
                className={servicesStyle.service_icon}
                style={{
                  backgroundImage: `url(${service.frontmatter.icon.publicURL})`,
                }}
              ></div>
              <p className={servicesStyle.service_details_title}>
                {service.frontmatter.title}
              </p>
              <p>{service.frontmatter.desc}</p>

              <div className={servicesStyle.service_details_learnmore}>
                <p>Learn More </p>
                <span className={servicesStyle.span}>
                  <StaticImage
                    src="../../../static/arrow.svg"
                    alt="right arrow"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
