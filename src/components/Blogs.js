import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Header from "./shared/Header";
import * as styles from "../styles/blogs.module.css";
export default function Blogs() {
  const imgs = ["/tech.webp", "/solution.webp", "/design.webp"];
  const title = ["tech", "solution", "design"];
  const desc = [
    "Easy to use software new innovation",
    "What is holding back the IT solution",
    "Easy to use software new innovation",
  ];
  return (
    <div>
      <div className={styles.blogs_header}>
        <Header header={"What's happening"} />
        <p className={styles.title}>Blogs & articles</p>
      </div>

      <div className={styles.blogs_container}>
        {imgs.map((img, id) => (
          <div className={styles.bolg_wrapper} key={id}>
            <div
              className={styles.img}
              style={{
                backgroundImage: `linear-gradient(0deg,  rgba(0,0,0,0.6588235294117647 ) 0%, rgba(156,156,156,0.10196078431372549 ) 100%), url(${img})`,
              }}
            >
              <div className={styles.blog_title}>{title[id]}</div>
              <div className={styles.plus}></div>
            </div>

            <div className={styles.blog_info_container}>
              <div className={styles.blog_info_wrapper}>
                <div>
                  <span className={styles.span}>
                    <StaticImage src="../../static/clock.svg" alt=" " />
                  </span>
                  13 May 2022
                </div>
                <div>
                  <span className={styles.span}>
                    <StaticImage src="../../static/person.svg" alt=" " />
                  </span>
                  By Admin
                </div>
              </div>

              <p className={styles.desc}>{desc[id]}</p>

              <div className={styles.learn}>
                <p>Learn More </p>
                <div className={styles.arrow}>
                  <StaticImage src="../../static/arrow.svg" alt="right arrow" />
                  <StaticImage
                    src="../../static/arrowc.svg"
                    alt="right arrow"
                    className={styles.cyan_arrow}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
