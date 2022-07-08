import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import * as sideNav from "../styles/nav.module.css";

export default function SideNav() {
  const close = () => {
    document.querySelector("#side-nav").classList.remove("show");
  };
  return (
    <div className={sideNav.sideNav_container} id="side-nav">
      <div className={sideNav.logo_svg_container}>
        <div>
          <Link to="/">
            <StaticImage
              src="../../static/logo.webp"
              alt="Caballero IT Agency"
              width={300}
            />
          </Link>
        </div>
        <div onClick={close}>
          <svg
            viewBox="0 0 100 80"
            width="40"
            height="40"
            fill="white"
            onClick={close}
          >
            <rect
              className={sideNav.first_line}
              x="20"
              y="-10"
              width="65"
              height="7"
            ></rect>
            <rect
              className={sideNav.sec_line}
              y="50"
              x="-25"
              width="65"
              height="7"
            ></rect>
          </svg>
        </div>
      </div>

      <div className={sideNav.side_links_container}>
        <div className={sideNav.side_links}>
          <Link to="/">Home</Link>
          <div className={sideNav.border_expand}></div>
        </div>
        <div className={sideNav.side_links}>
          <Link to="/services">Services</Link>
          <div className={sideNav.border_expand}></div>
        </div>

        <div className={sideNav.side_links}>
          <Link to="/about-us">About us</Link>
          <div className={sideNav.border_expand}></div>
        </div>

        <div className={sideNav.side_links}>
          <Link to="/contact">Contact</Link>
          <div className={sideNav.border_expand}></div>
        </div>
        <div className={sideNav.side_links}>
          <Link to="/blogs">Blogs</Link>
          <div className={sideNav.border_expand}></div>
        </div>
      </div>
    </div>
  );
}
