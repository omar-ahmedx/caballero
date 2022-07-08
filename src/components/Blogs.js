import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Header from "./shared/Header";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as styles from "../styles/blogs.module.css";
import { graphql, useStaticQuery } from "gatsby";
export default function Blogs({ place }) {
  const blogsData = useStaticQuery(graphql`
    query blogs {
      allContentfulBlogs(limit: 3) {
        nodes {
          category {
            category
          }
          image {
            url
          }
          time(formatString: "DD MMM YY")
          title
          writer {
            name
          }
        }
      }
    }
  `);

  let blogs = blogsData.allContentfulBlogs.nodes;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 740,
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
      <div className={styles.blogs_header}>
        <Header header={"What's happening"} />
        <p className={styles.title}>Blogs & articles</p>
      </div>

      <div>
        <Slider {...settings}>
          {blogs.map((blog, id) => (
            <div key={id}>
              <div className={styles.blog_wrapper}>
                <div
                  className={styles.img}
                  style={{
                    backgroundImage: `linear-gradient(0deg,  rgba(0,0,0,0.6588235294117647 ) 0%, rgba(156,156,156,0.10196078431372549 ) 100%), url(${blog.image.url})`,
                  }}
                >
                  <div className={styles.blog_category}>
                    {blog.category.category}
                  </div>
                  <div className={styles.plus}></div>
                </div>

                <div className={styles.blog_info_container}>
                  <div className={styles.blog_info_wrapper}>
                    <div>
                      <span className={styles.span}>
                        <StaticImage src="../../static/clock.svg" alt=" " />
                      </span>
                      {blog.time}
                    </div>
                    <div>
                      <span className={styles.span}>
                        <StaticImage src="../../static/person.svg" alt=" " />
                      </span>
                      By {blog.writer.name}
                    </div>
                  </div>

                  <p className={styles.desc}>{blog.title}</p>

                  <div className={styles.learn}>
                    <p>Learn More </p>
                    <div className={styles.arrow}>
                      <StaticImage
                        src="../../static/arrow.svg"
                        alt="right arrow"
                        className={styles.blue_arrow}
                      />
                      <StaticImage
                        src="../../static/arrowc.svg"
                        alt="right arrow"
                        className={styles.cyan_arrow}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
