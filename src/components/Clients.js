import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import * as styles from "../styles/clients.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GatsbyImage } from "gatsby-plugin-image";
const settings = {
  arrows: false,
  autoplay: true,
  infinite: true,
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: (dots) => <ul>{dots}</ul>,
  customPaging: (i) => <div className="dots"></div>,
};
export default function Clients() {
  const clientsData = useStaticQuery(graphql`
    query clients {
      allContentfulClients {
        nodes {
          avatar {
            gatsbyImageData(layout: CONSTRAINED)
          }
          opinion {
            opinion
          }
          name
          title
        }
      }
    }
  `);
  const clients = clientsData.allContentfulClients.nodes;
  return (
    <div className="container">
      <div className={styles.slider_container}>
        <Slider {...settings} className={styles.dots}>
          {clients.map((client, index) => (
            <div key={index}>
              <div className={styles.container}>
                <div className={styles.picture}>
                  <GatsbyImage image={client.avatar.gatsbyImageData} alt=" " />
                </div>
                <div className={styles.client_text_container}>
                  <p className={styles.client_text}>{client.opinion.opinion}</p>
                  <div className={styles.client_info}>
                    <p>{client.name}</p>
                    <p>{client.title}</p>
                  </div>
                </div>
                <div className={styles.client_contact}></div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
