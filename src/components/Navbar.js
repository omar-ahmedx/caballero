import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "../styles/nav.module.css";

export default function Navbar({ current }) {
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
  const open = () => {
    document.querySelector("#side-nav").classList.add("show");
  };
  return (
    <header>
      <div className="contacts_info_container">
        <div className="contacts_info">
          <a
            href="https://www.google.com/maps/search/Al+Mu'tarid+St+8,+Oud+Al+Hassah,+Al+Ain,+United+Arab+Emirates/@24.2281,55.7436,17z?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              <StaticImage
                src={`${path}/nav/location.webp`}
                alt="facebook logo"
                width={20}
              />
            </span>
            Al Ain, Abu Dhabi. U.A.E
          </a>
          <a href="mailto:jaber@caballeroit.com">
            <span>
              <StaticImage
                src={`${path}/nav/gmail.webp`}
                alt="facebook logo"
                width={25}
              />
            </span>
            jaber@caballeroit.com
          </a>
        </div>

        <div className="social_media">
          <a
            href="https://web.facebook.com/caballero.it1/"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src={`${path}/nav/facebook.webp`}
              alt="facebook logo"
              width={11}
            />
          </a>
          <a href="#">
            <StaticImage
              src={`${path}/nav/twitter.webp`}
              alt="twitter logo"
              width={22}
            />
          </a>
          <a href="https://www.instagram.com/caballero.it/">
            <StaticImage
              src={`${path}/nav/instagram.webp`}
              alt="instagram logo"
              width={17}
            />
          </a>
          <a href="#">
            <StaticImage
              src={`${path}/nav/linkedin.webp`}
              alt="linkedin logo"
              width={17}
            />
          </a>
        </div>
      </div>

      <nav>
        <div className="logo">
          <Link to="/">
            <GatsbyImage
              image={logo}
              alt="Caballero logo, a helmet with a sowrd"
            />
          </Link>
        </div>
        <div className={styles.links}>
          <div>
            <Link
              style={
                current === "home" ? { color: "#1b7bcb" } : { color: "white" }
              }
              to="/"
            >
              Home
            </Link>
            <div className={current === "home" ? styles.border : ""}></div>
          </div>
          <div>
            <Link
              style={
                current === "services"
                  ? { color: "#1b7bcb" }
                  : { color: "white" }
              }
              to="/services"
            >
              Services
            </Link>
            <div className={current === "services" ? styles.border : ""}></div>
          </div>
          <div>
            <Link
              style={
                current === "aboutUs"
                  ? { color: "#1b7bcb" }
                  : { color: "white" }
              }
              to="/about-us"
            >
              About Us
            </Link>
            <div className={current === "aboutUs" ? styles.border : ""}></div>
          </div>
          <div>
            <Link
              style={
                current === "contact"
                  ? { color: "#1b7bcb" }
                  : { color: "white" }
              }
              to="/contact"
            >
              Contact
            </Link>
            <div className={current === "contact" ? styles.border : ""}></div>
          </div>
          <div>
            <Link
              style={
                current === "blogs" ? { color: "#1b7bcb" } : { color: "white" }
              }
              to="/blogs"
            >
              Blogs
            </Link>
            <div className={current === "blogs" ? styles.border : ""}></div>
          </div>
        </div>

        <div className="contact">
          <a
            href="https://wa.me/971525902284"
            target="_blank"
            rel="noreferrer"
            className="question"
          >
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
          </a>

          <div>
            <StaticImage src={`${path}/search.webp`} alt="loupe" width={30} />
          </div>
        </div>
        <div className={styles.mobile_nav_icon} onClick={open}>
          <svg
            viewBox="0 0 100 80"
            width="40"
            height="40"
            style={{ fill: "#1b7bc6" }}
          >
            <rect x="20" y="30" width="65" height="7"></rect>
            <rect y="50" width="65" height="7"></rect>
          </svg>
        </div>
      </nav>
    </header>
  );
}
