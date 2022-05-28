import React from "react";
import * as styles from "../styles/completedWork.module.css";
import Header from "./shared/Header";
export default function CompletedWork() {
  const images = ["/online.webp", "/ecommerce.webp", "/graphic.webp"];
  const pTitle = ["Online Websites", "E-commerce Store", "Graphic Design"];
  return (
    <div className={styles.container}>
      <div className={styles.bg_color}>
        <div className={styles.project_header}>
          <Header header={"Recenlty completed work"} />
          <p className={styles.title}>Our latest projects</p>
        </div>
      </div>

      <div className={styles.bg_color}>
        <div className={`${styles.project_wrapper} container`}>
          {images.map((img, id) => (
            <div key={id}>
              <img src={img} alt=" " className={styles.project_img} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className={`${styles.project_wrapper} container`}>
          {images.map((img, id) => (
            <div key={id} className={styles.info}>
              <div className={styles.date_container}>
                <span className={styles.date_icon}></span>13 May 2022
              </div>
              <h3>{pTitle[id]}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>

              <div className={styles.view_projects}>View our projects</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
