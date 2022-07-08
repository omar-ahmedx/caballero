import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "../styles/aboutUsCom.module.css";
import { graphql, useStaticQuery } from "gatsby";
export default function AboutBlogs() {
  const blogsData = useStaticQuery(graphql`
    query aboutBlogs {
      allContentfulAboutUsBlogs {
        nodes {
          title
          image {
            url
          }
        }
      }
    }
  `);
  const blogs = blogsData.allContentfulAboutUsBlogs.nodes;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
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
    <div className="container">
      <div className={styles.blogs_container}>
        <Slider {...settings} className={styles.overflow}>
          {blogs.map((blog, id) => (
            <div key={id} className={styles.blog}>
              <div
                className={styles.background}
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)),url(${blog.image.url})`,
                }}
              >
                <div className={styles.text}>{blog.title}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
