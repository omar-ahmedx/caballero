import React from "react";
import Header from "./shared/Header";
import * as styles from "../styles/team.module.css";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { graphql, Link, useStaticQuery } from "gatsby";
export default function Team() {
  const teamData = useStaticQuery(graphql`
    query team {
      allContentfulTeam {
        nodes {
          image {
            gatsbyImageData(layout: CONSTRAINED)
          }
          instagram
          linkedin
          name
          position
          twitter
          facebook
        }
      }
    }
  `);
  const team = teamData.allContentfulTeam.nodes;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 650,
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
    <div>
      <div className={styles.upper_header}>
        <Header header="Team" />
      </div>
      <p className={styles.low_header}>Our Awesome Team</p>
      <div className={styles.team_container}>
        <Slider {...settings}>
          {team.map((member, index) => (
            <div key={index}>
              <div className={styles.member}>
                <div className={styles.black_squareSM}></div>
                <div className={styles.black_squareL}></div>
                <div className={styles.member_image}>
                  <GatsbyImage image={member.image.gatsbyImageData} alt=" " />
                </div>
                <div className={styles.member_info}>
                  <p>{member.name}</p>
                  <p>{member.position}</p>
                </div>
                <div className={styles.member_social}>
                  <Link to={member.facebook}>
                    <StaticImage src="../../static/team/facebook.svg" alt=" " />
                  </Link>
                  <Link to={member.twitter}>
                    <StaticImage src="../../static/team/twitter.svg" alt=" " />
                  </Link>
                  <Link to={member.instagram}>
                    <StaticImage
                      src="../../static/team/inastagram.svg"
                      alt=" "
                    />
                  </Link>
                  <Link to={member.linkedin}>
                    <StaticImage src="../../static/team/linkedin.svg" alt=" " />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
