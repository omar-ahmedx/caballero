import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as nav from "../styles/nav.module.css";

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "logo.webp" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);
  const logo = data.file.childImageSharp.gatsbyImageData;

  const path = "../../static/";
  return (
    <header>
      <div className="contacts_info_container">
        <div className="contacts_info">
          <div>
            <span>
              <StaticImage
                src={`${path}/nav/location.webp`}
                alt="facebook logo"
                width={20}
              />
            </span>{" "}
            Al Ain, Abu Dhabi. U.A.E
          </div>
          <div>
            <span>
              <StaticImage
                src={`${path}/nav/gmail.webp`}
                alt="facebook logo"
                width={25}
              />
            </span>{" "}
            jaber@caballeroIT.com
          </div>
        </div>

        <div className="social_media">
          <div>
            <StaticImage
              src={`${path}/nav/facebook.webp`}
              alt="facebook logo"
              width={11}
            />
          </div>
          <div>
            <StaticImage
              src={`${path}/nav/twitter.webp`}
              alt="twitter logo"
              width={17}
            />
          </div>
          <div>
            <StaticImage
              src={`${path}/nav/instagram.webp`}
              alt="instagram logo"
              width={17}
            />
          </div>
          <div>
            <StaticImage
              src={`${path}/nav/linkedin.webp`}
              alt="linkedin logo"
              width={17}
            />
          </div>
        </div>
      </div>

      <nav>
        <div className="logo">
          <GatsbyImage
            image={logo}
            alt="Caballero logo, a helmet with a sowrd"
          />
        </div>
        <div className={nav.links}>
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/">Services</Link>
          </div>
          <div>
            <Link to="/">About Us</Link>
          </div>
          <div>
            <Link to="/">Contact</Link>
          </div>
          <div>
            <Link to="/">Blogs</Link>
          </div>
        </div>

        <div className="contact">
          <div className="question">
            <div>
              <StaticImage
                src={`${path}/contacts.webp`}
                alt="chat icon"
                width={50}
              />
            </div>
            <p>
              Have any question? <br />
              Free 00971 52 590 2284
            </p>
          </div>

          <div>
            <StaticImage src={`${path}/search.webp`} alt="loupe" width={30} />
          </div>
        </div>
      </nav>
    </header>
  );
}
