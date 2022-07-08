import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "../styles/blogsPage.module.css";
import { graphql, Link } from "gatsby";
import Base from "../components/shared/Base";
import Layout from "../components/Layout";

export default function Blogs({ data, pageContext }) {
  const blogs = data.allContentfulBlogs.nodes;
  const { currentPage } = pageContext;
  const { hasNextPage, hasPreviousPage, pageCount } =
    data.allContentfulBlogs.pageInfo;

  return (
    <Layout currentPath="blogs">
      <Base path="Blogs" header="Blog Posts" />
      <div className="container">
        <div className={styles.blogs_container}>
          {blogs.map((blog, id) => (
            <div className={styles.blog_wrapper} key={id}>
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
          ))}
        </div>
      </div>
      {pageCount > 1 ? (
        <div className={styles.pagination}>
          {hasPreviousPage === true ? (
            <Link
              to={
                currentPage - 2 === 0 ? "/blogs" : "/blogs/" + (currentPage - 2)
              }
            >
              <StaticImage src="../../static/arrow_l.webp" alt=" " />
            </Link>
          ) : (
            ""
          )}

          {currentPage === pageCount ? (
            <Link to={"/blogs/" + (currentPage - 2)}>{currentPage - 1}</Link>
          ) : (
            ""
          )}

          <Link className={styles.current} to={"/blogs" + (currentPage - 1)}>
            {currentPage}
          </Link>

          {hasNextPage === true ? (
            <Link to={"/blogs/" + currentPage}>{currentPage + 1}</Link>
          ) : (
            ""
          )}

          {hasNextPage === true ? (
            <Link to={"/blogs/" + currentPage}>
              <StaticImage src="../../static/arrow_r.webp" alt=" " />
            </Link>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </Layout>
  );
}

export const servicesData = graphql`
  query BlogsTemplate($skip: Int!, $limit: Int!) {
    allContentfulBlogs(limit: $limit, skip: $skip) {
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
      pageInfo {
        pageCount
        itemCount
        hasPreviousPage
        hasNextPage
        currentPage
      }
    }
  }
`;
