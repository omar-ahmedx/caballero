import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import * as styles from "../../styles/services.module.css";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Services({ place }) {
  const servicesData = useStaticQuery(graphql`
    query Services {
      allContentfulServices(limit: 3) {
        nodes {
          title
          desc {
            desc
          }
          icon {
            url
          }
          image {
            url
          }
        }
      }
    }
  `);
  let services = servicesData.allContentfulServices.nodes;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1250,
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
    <div className={styles.slide_container}>
      <Slider {...settings}>
        {services.map((service, index) => (
          <div key={index}>
            <div
              className={styles.service_container}
              style={{
                backgroundImage: `linear-gradient( 180deg, rgba(156,156,156,0.42941), rgba(0,0,0,0.6588235) ), url(${service.image.url})`,
              }}
            >
              <div className={styles.service_title}>{service.title}</div>

              <div className={styles.service_details_container}>
                <div className={styles.service_details_wrapper}>
                  <div
                    className={styles.service_icon}
                    style={{
                      backgroundImage: `url(${service.icon.url})`,
                    }}
                  ></div>
                  <p className={styles.service_details_title}>
                    {service.title}
                  </p>
                  <p>{service.desc.desc}</p>

                  <Link
                    to="/services"
                    className={styles.service_details_learnmore}
                  >
                    <p>Learn More </p>
                    <span className={styles.span}>
                      <StaticImage
                        src="../../../static/arrow.svg"
                        alt="right arrow"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
