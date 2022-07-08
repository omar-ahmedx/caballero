import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Header from "./shared/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "../styles/offers.module.css";
import { GatsbyImage } from "gatsby-plugin-image";
export default function Offers() {
  const offersData = useStaticQuery(graphql`
    query offers {
      allContentfulOffers {
        nodes {
          desc
          title
          icon {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  `);
  const offers = offersData.allContentfulOffers.nodes;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={`${styles.container} container`}>
      <div>
        <Header header={"what we're offering"} />
      </div>
      <p className={styles.title}>
        Services we're providing <br />
        to our customers
      </p>
      <div>
        <Slider {...settings}>
          {offers.map((offer, index) => (
            <div key={index}>
              <div className={styles.offers_wrapper}>
                <div className={styles.offers_icons}>
                  <GatsbyImage image={offer.icon.gatsbyImageData} alt=" " />
                </div>
                <p className={styles.offers_title}>{offer.title}</p>
                <p className={styles.offers_p}>{offer.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
