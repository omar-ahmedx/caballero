import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";
import Base from "../../components/shared/Base";
import * as styles from "../../styles/aboutUsCom.module.css";
import Intro from "../../components/shared/Intro";
import Info from "../../components/Info";
import Team from "../../components/Team";
import AboutBlogs from "../../components/AboutBlogs";
import { graphql } from "gatsby";
export default function index({ data }) {
  const about = data.allContentfulAboutUs.nodes[0];
  return (
    <Layout currentPath="aboutUs">
      <Base path="About us" header="About Us" />

      <AboutBlogs />

      <div className={`container ${styles.container}`}>
        <div>
          <Intro header={about.title} list={about.list} />
          <div className={styles.innovation_container}>
            {about.icons.map((icon, id) => (
              <div key={id} style={{ maxWidth: "250px" }}>
                <div style={{ width: "90px" }}>
                  <GatsbyImage image={icon.gatsbyImageData} alt=" " />
                </div>
                <p className={styles.innovation_header}>
                  {about.iconsTitle[id]}
                </p>
                <p>{about.iconsDesc[id]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.images_container}>
          <div
            className={styles.about_image}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),url(${about.image.url})`,
            }}
          >
            <div className={styles.blue}></div>
          </div>
        </div>
      </div>

      <Info />
      <div className="container">
        <Team />
      </div>
    </Layout>
  );
}

export const aboutData = graphql`
  query about {
    allContentfulAboutUs {
      nodes {
        icons {
          gatsbyImageData(layout: CONSTRAINED)
        }
        iconsDesc
        iconsTitle
        title
        image {
          url
        }
        list
      }
    }
  }
`;
