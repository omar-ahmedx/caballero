import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "../styles/info.module.css";
import { graphql, useStaticQuery } from "gatsby";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default function Info() {
  const blogsData = useStaticQuery(graphql`
    query info {
      allContentfulInfo {
        nodes {
          icon {
            gatsbyImageData(layout: CONSTRAINED)
          }
          number
          title
        }
      }
    }
  `);

  let info = blogsData.allContentfulInfo.nodes;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {info.map((li, id) => (
          <div key={id}>
            <div className={styles.image}>
              <GatsbyImage image={li.icon.gatsbyImageData} alt=" " />
            </div>
            <p className={styles.number}>
              <CountUp start={0} end={li.number} redraw={true} duration={2}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              +
            </p>
            <p className={styles.text}>{li.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
