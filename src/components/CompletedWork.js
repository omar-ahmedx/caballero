import React, { useEffect, useState } from "react";
import * as styles from "../styles/completedWork.module.css";
import Header from "./shared/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
export default function CompletedWork() {
  const [height, setHeight] = useState(0);
  const projectsData = useStaticQuery(graphql`
    query projects {
      allContentfulProjects(limit: 3) {
        nodes {
          desc {
            desc
          }
          image {
            gatsbyImageData(layout: CONSTRAINED)
          }
          time(formatString: "DD MMM YY")
          title
        }
      }
    }
  `);
  let projects = projectsData.allContentfulProjects.nodes;

  useEffect(() => {
    function updateHeight() {
      setHeight(document.querySelector("#image").clientHeight);
    }
    window.addEventListener("resize", updateHeight);
    updateHeight();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <div className={styles.container}>
      <div className={styles.bg_color} style={{ marginBottom: `-${height}px` }}>
        <div className={styles.project_header}>
          <Header header={"Recenlty completed work"} />
          <p className={styles.title}>Our latest projects</p>
        </div>
      </div>

      <div>
        <div className={`${styles.project_container} container`}>
          <Slider {...settings}>
            {projects.map((project, id) => (
              <div key={id}>
                <div key={id} className={styles.project_wrapper}>
                  <div className={styles.info}>
                    <div id="image">
                      <GatsbyImage
                        image={project.image.gatsbyImageData}
                        alt=" "
                        className={styles.project_img}
                      />
                    </div>
                    <div className={styles.info_container}>
                      <div className={styles.date_container}>
                        <span className={styles.date_icon}></span>{" "}
                        {project.time}
                      </div>
                      <h3>{project.title}</h3>
                      <p>{project.desc.desc}</p>

                      <div className={styles.view_projects}>
                        View our projects
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
