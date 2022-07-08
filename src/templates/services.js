import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Base from "../components/shared/Base";
import * as styles from "../styles/servicesPage.module.css";

export default function Services({ data, pageContext }) {
  const services = data.allContentfulServices.nodes;
  const { currentPage } = pageContext;
  const { hasNextPage, hasPreviousPage, pageCount } =
    data.allContentfulServices.pageInfo;

  return (
    <Layout currentPath="services">
      <Base path="Services" header="Our Services" />
      <div className="container">
        <div className={styles.services_container}>
          {services.map((service, index) => (
            <div
              key={index}
              className={styles.service_wrapper}
              style={{
                backgroundImage: `linear-gradient( 180deg, rgba(156,156,156,0.42941), rgba(0,0,0,0.6588235) ), url(${service.image.url})`,
              }}
            >
              <div className={styles.service_title}>{service.title}</div>

              <div className={styles.service_details_container}>
                <div className={styles.service_details_wrapper}>
                  <div
                    className={styles.service_icon}
                    style={{
                      backgroundImage: `url(${service.icon.url})`,
                    }}
                  ></div>
                  <p className={styles.service_details_title}>
                    {service.title}
                  </p>
                  <p>{service.desc.desc}</p>

                  <div className={styles.service_details_learnmore}>
                    <p>Learn More </p>
                    <span className={styles.span}>
                      <StaticImage
                        src="../../static/arrow.svg"
                        alt="right arrow"
                      />
                    </span>
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
                currentPage - 2 === 0
                  ? "/services"
                  : "/services/" + (currentPage - 2)
              }
            >
              <StaticImage src="../../static/arrow_l.webp" alt=" " />
            </Link>
          ) : (
            ""
          )}

          {currentPage === pageCount ? (
            <Link to={"/services/" + (currentPage - 2)}>{currentPage - 1}</Link>
          ) : (
            ""
          )}

          <Link className={styles.current} to={"/services" + (currentPage - 1)}>
            {currentPage}
          </Link>

          {hasNextPage === true ? (
            <Link to={"/services/" + currentPage}>{currentPage + 1}</Link>
          ) : (
            ""
          )}

          {hasNextPage === true ? (
            <Link to={"/services/" + currentPage}>
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
  query ServicesTemplate($skip: Int!, $limit: Int!) {
    allContentfulServices(limit: $limit, skip: $skip) {
      nodes {
        desc {
          desc
        }
        icon {
          gatsbyImageData(layout: CONSTRAINED)
        }
        image {
          url
        }
        title
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
