import React from "react";
import Header from "./shared/Header";
import * as styles from "../styles/team.module.css";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

import { graphql, Link, useStaticQuery } from "gatsby";
export default function Team() {
  const teamData = useStaticQuery(graphql`
    query team {
      allContentfulTeam(sort: { fields: contentfulid }) {
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

  return (
    <div>
      <div className={styles.upper_header}>
        <Header header="Team" />
      </div>
      <p className={styles.low_header}>Our Awesome Team</p>
      <div className={styles.team_container}>
        {team.map((member, index) => (
          <div key={index}>
            <div className={styles.member}>
              <div className={styles.member_image}>
                <GatsbyImage image={member.image.gatsbyImageData} alt=" " />

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
              <div className={styles.member_info}>
                <p className={styles.member_name}>{member.name}</p>
                <p className={styles.member_position}>{member.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
