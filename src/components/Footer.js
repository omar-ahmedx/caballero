import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "../styles/footer.module.css";

export default function Footer({ current }) {
  return (
    <footer>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link to="/">
            <StaticImage src="../../static/logo.webp" alt=" " width={400} />
          </Link>
          <p>Subscribe for our upcoming latest articles and news resources</p>
          <div className={styles.sub_container}>
            <input
              className={styles.input}
              type="email"
              placeholder="Email Address"
            />
            <div className={styles.telegram}>
              <StaticImage src="../../static/telegram.webp" alt=" " />
            </div>
          </div>
        </div>

        <div className={styles.links_container}>
          <div className={styles.section_container}>
            <div>Links</div>
            <div className={styles.links_wrapper}>
              <Link to="/" className={current === "home" ? styles.active : ""}>
                <span>
                  <StaticImage
                    src="../../static/footer/right_white.webp"
                    alt=""
                    className={styles.arrow_white}
                  />
                  <StaticImage
                    src="../../static/footer/right_blue.webp"
                    alt=""
                    className={styles.arrow_blue}
                  />
                </span>
                Home
              </Link>
              <Link
                to="/services"
                className={current === "services" ? styles.active : ""}
              >
                <span>
                  <StaticImage
                    src="../../static/footer/right_white.webp"
                    alt=""
                    className={styles.arrow_white}
                  />
                  <StaticImage
                    src="../../static/footer/right_blue.webp"
                    alt=""
                    className={styles.arrow_blue}
                  />
                </span>
                Services
              </Link>
              <Link
                to="/about-us"
                className={current === "aboutUs" ? styles.active : ""}
              >
                <span>
                  <StaticImage
                    src="../../static/footer/right_white.webp"
                    alt=""
                    className={styles.arrow_white}
                  />
                  <StaticImage
                    src="../../static/footer/right_blue.webp"
                    alt=""
                    className={styles.arrow_blue}
                  />
                </span>
                About Us
              </Link>
              <Link
                to="/contact"
                className={current === "contact" ? styles.active : ""}
              >
                <span>
                  <StaticImage
                    src="../../static/footer/right_white.webp"
                    alt=""
                    className={styles.arrow_white}
                  />
                  <StaticImage
                    src="../../static/footer/right_blue.webp"
                    alt=""
                    className={styles.arrow_blue}
                  />
                </span>
                Contact
              </Link>
              <Link
                to="/blogs"
                className={current === "blogs" ? styles.active : ""}
              >
                <span>
                  <StaticImage
                    src="../../static/footer/right_white.webp"
                    alt=""
                    className={styles.arrow_white}
                  />
                  <StaticImage
                    src="../../static/footer/right_blue.webp"
                    alt=""
                    className={styles.arrow_blue}
                  />
                </span>
                Blogs
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.section_container}>
            <div>Contact</div>
            <div className={styles.contact_container}>
              <a href="https://wa.me/971525902284">
                <span>
                  <StaticImage src="../../static/footer/call.svg" alt=" " />
                </span>
                00971 52 590 2284
              </a>
              <a
                href="https://www.google.com/maps/search/Al+Mu'tarid+St+8,+Oud+Al+Hassah,+Al+Ain,+United+Arab+Emirates/@24.2281,55.7436,17z?hl=en"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <StaticImage src="../../static/footer/location.svg" alt=" " />
                </span>
                Al Ain, Abu Dhabi, U.A.E
              </a>
              <a href="mailto:jaber@caballeroit.com">
                <span>
                  <StaticImage src="../../static/footer/message.svg" alt=" " />
                </span>
                jaber@cabakkeroIT.com
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className={styles.section_container}>
            <div>Social media</div>
            <div className={styles.social_media}>
              <a href="https://web.facebook.com/caballero.it1/">
                <StaticImage src="../../static/footer/facebook.svg" alt=" " />
              </a>
              <a href="#">
                <StaticImage src="../../static/footer/twitter.svg" alt=" " />
              </a>
              <a href="https://www.instagram.com/caballero.it/">
                <StaticImage src="../../static/footer/inastagram.svg" alt=" " />
              </a>
              <a href="#">
                <StaticImage src="../../static/footer/linkedin.svg" alt=" " />
              </a>
            </div>
            <div>
              <a
                href="https://www.expo2020dubai.com/"
                target="_blank"
                rel="noreferrer"
              >
                <StaticImage src="../../static/footer/expo2020.svg" alt=" " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
